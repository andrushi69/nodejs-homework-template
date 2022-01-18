const Jimp = require("jimp")

class fileStorage {
  constructor(Storage, file, user) {
    this.storage = new Storage(file, user)
    this.pathfile = file.path
  }

  async updateAvatar() {
    await this.transformAvatar(this.pathfile)
    return await this.storage.save()
  }

  async transformAvatar(pathFile) {
    const pic = await Jimp.read(pathFile)
    await pic.autocrop().cover(250, 250, Jimp.HORIZONTAL_ALIGN_CENTER).writeAsync(pathFile)
  }


}

module.exports = fileStorage