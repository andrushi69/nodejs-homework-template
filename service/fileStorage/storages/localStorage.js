const path = require("path")
const fs = require("fs/promises")
const User = require("../../../repository/authFunctions")

class localStorage {
  constructor(file, user) {
    this.userId = user.id
    this.filename = file.filename
    this.filePath = file.path
    this.folderAvatar = process.env.FOLDER_FOR_AVATAR
  }

  async save() {
    const destination = path.join(this.folderAvatar, this.userId)
    await fs.mkdir(destination, {recursive: true})
    await fs.rename(this.filePath, path.join(destination, this.filename))
    const avatarUrl = path.normalize(path.join(this.userId, this.filename))
    await User.updateAvatar(this.userId, avatarUrl)
    return avatarUrl

  }


}

module.exports = localStorage