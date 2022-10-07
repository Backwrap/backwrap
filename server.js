const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`);
});
