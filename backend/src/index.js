require("dotenv");
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.SERVER_PORT || 8000;
const data = require('./Data/jsonData.json')
const data2 = require('./Data/jsonData2.json')
// const multer = require("multer");
const Schede = require("./component/mongoModels");
const schema = require("./schema/mongoSchema");
require("../mongoDBserver");

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "./src/");
//   },
//   filename: (req, file, cb) => {
//     let Suffix = "-" + Date.now;
//     cb(null, file.fieldname + Suffix);
//   },
// });

// const upload = multer({ storage: storage });
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send(data2);
});

app.get("/findName", async (req, res) => {
  try {
    const schede = new Schede(schema);

    const nome = req.query.nome;
    const result = await schede.findModels({ nome });
    res.status(200).json(result);
    
    // let prova = result.map(resp => {
    //   return resp
    // })
    // console.log(prova)

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Errore del server" });
  }
});

app.post("/createCollection", (req, res) => {
  const manager = new Schede(schema);

  manager.createModels(data).then((response) => res.status(202).json(response));
});

app.listen(port, () => {
  console.log(`App is online at the: http://localhost:${port}`);
});
