const {fileStorage, cloudStorage} = require("../../../service/fileStorage/storages")
const statusCode = require("../../../libs/statusCodes");


const uploadAvatar = async (req, res) => {
  const uploadService = new fileStorage(cloudStorage, req.file, req.user)
  const avatarUrl = await uploadService.updateAvatar()
  res.status(statusCode.Ok).json({data: {avatarUrl}})
}
module.exports = uploadAvatar