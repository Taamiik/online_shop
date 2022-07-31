const TelevisionsModel = require("./model");
const TelevisionsService = require("./service");

class Controller {
  async getAll(req, res, next) {
    try {
      const data = await TelevisionsModel.find({});
      if (data.length === 0) {
        TelevisionsService.getAll();
        const data = await TelevisionsModel.find({});
        return res.json(data);
      }
      return res.json(data);
    } catch (e) {}
  }
}

module.exports = new Controller();
