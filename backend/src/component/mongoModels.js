const mongoose = require("mongoose");

class Schede {
  constructor(schema) {
    this.newModels = mongoose.model("users", schema);
  }

  createModels(data) {
    return this.newModels.insertMany(data);
  }

  findModels(data) {

    // console.log(this.newModels)
    console.log(data.nome)
    return this.newModels.find({ nome: data.nome })
  }
}

module.exports = Schede;
