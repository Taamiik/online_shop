const NotebooksModel = require("./model");
const NotebooksService = require("./service");

class Controller {
  async getAll(req, res, next) {
    try {
      const data = await NotebooksModel.find({});
      if (data.length === 0) {
        NotebooksService.getAll();
        const data = await NotebooksModel.find({});
        return res.json(data);
      }
      return res.json(data);
    } catch (e) {}
  }
}

module.exports = new Controller();
