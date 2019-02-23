const nameGenerator = require("project-name-generator");

class GeneratorController {
  constructor() {}

  async generateUsers(req, res) {
    try {
      const names = nameGenerator({ words: 127 }).raw;

      const users = names.map(name => ({
        name,
        email: `${name}@formare.com`,
        picture:
          "https://ncsli.unc.edu/wp-content/uploads/sites/6/2016/07/profile-orange.png"
      }));

      res.json(users);
    } catch (err) {
      res.status(500).send(err);
    }
  }
}

module.exports = GeneratorController;
