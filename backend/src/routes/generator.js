const GeneratorController = require("../modules/generator/generator.controller");

class Generator {
  constructor(app) {
    this.app = app;
    this.controller = new GeneratorController();
    this.initRoute();
    console.log("init route");
  }

  initRoute() {
    this.app
      .route("/generate")
      .get((req, res) => this.controller.generateUsers(req, res));
  }
}

module.exports = app => new Generator(app);
