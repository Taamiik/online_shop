const TheelphoneModel = require("./model");
const TheelphoneService = require("./service");

class Controller {
  async getAll(req, res, next) {
    try {
      const data = await TheelphoneModel.find({});
      if (data.length === 0) {
        TheelphoneService.getAll();
        const data = await TheelphoneModel.find({});
        return res.json(data);
      }
      return res.json(data);
    } catch (e) {}
  }
}

module.exports = new Controller();
