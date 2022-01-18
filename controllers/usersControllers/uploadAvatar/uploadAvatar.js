const {fileStorage, cloudStorage} = require("../../../service/fileStorage/storages")


const uploadAvatar = async (req, res) => {
  // eslint-disable-next-line new-cap
  const uploadService = new fileStorage(cloudStorage, req.file, req.user)
  const avatarUrl = await uploadService.updateAvatar()
  res.status(200).json({data: {avatarUrl}})
}
module.exports = uploadAvatar