const puppeteer = require("puppeteer");

const NotebooksModel = require("./model");
const links = require("./constants");

class Service {
  async getAll() {
    try {
      const scrape = async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(links.urlParent);

        const result = await page.evaluate((links) => {
          const data = [];
          const prop = links.paths;

          const getText = (url) => {
            const domElements = document.querySelectorAll(url);

            Object.values(domElements).forEach((el) => {
              const title = el.querySelector(prop.title).innerText;
              const price = el.querySelector(prop.prices).innerText;
              const image = el.querySelector(prop.images).getAttribute("src");
              const description = el.querySelectorAll(prop.description);
              const params = [];

              Object.values(description).forEach((elem) => {
                const name = elem.querySelector(prop.param.name).innerText;
                const value = elem.querySelector(prop.param.value).innerText;
                params.push({ name, value });
              });
              data.push({ title, price, image, param: params });
            });
          };

          getText(links.start);
          return data;
        }, links);

        browser.close();
        return result;
      };

      scrape().then((value) => {
        value.filter(async (product) => {
          const check = await NotebooksModel.findOne({ title: product.title });
          if (!check) {
            const record = await NotebooksModel.create({
              title: product.title,
              price: product.price,
              image: product.image,
              param: product.param,
            });
            await record.save();
          }
        });
      });
    } catch (e) {}
  }
}

module.exports = new Service();
