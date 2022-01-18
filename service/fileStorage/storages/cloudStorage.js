const {v2: cloudinary} = require("cloudinary")
const {promisify} = require("util")
const {unlink} = require("fs/promises")
const User = require("../../../repository/authFunctions")

const CLOUD_FOLDER_AVATAR = "avatars"

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET_KEY,
  secure: true
});


class cloudStorage {
  constructor(file, user) {
    this.userId = user.id
    this.filePath = file.path
    this.avatarCloudId = user.avatarCloudId
    this.folderAvatar = CLOUD_FOLDER_AVATAR
    this.uploadCLoud = promisify(cloudinary.uploader.upload)
  }

  async save() {
    // eslint-disable-next-line camelcase
    const {public_id, secure_url} = await this.uploadCLoud(this.filePath, {
      public_id: this.avatarCloudId,
      folder: this.folderAvatar
    })
    const newAvatarIdCloud = public_id.replace(`${this.folderAvatar}/`, "")
    await User.updateAvatar(this.userId, secure_url, newAvatarIdCloud)
    await this.removeUploadFile(this.filePath)
    // eslint-disable-next-line camelcase
    return secure_url
  }

  async removeUploadFile(filePath) {
    try {
      await unlink(filePath)
    } catch (er) {
      console.log(er)
    }
  }


}

module.exports = cloudStorage