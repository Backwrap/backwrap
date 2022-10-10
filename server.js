const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const apps = require("./Apps/index");
require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());

fs.readFile("apps.json", (err, data) => {
  let json = JSON.parse(data);
  for (i of json) {
    let router = `${i.imports}Router`;
    app.use(`/api/${router}`, apps[router]);
  }
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`);
});
