const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const Student = require("./router/studentRoute");
const Feedback = require("./router/feedbackRoute");
const Event = require("./router/eventRoute");
const BatchSection = require("./router/batchSectionRoute");
const fileUpload = require("express-fileupload");

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

dotenv.config({ path: "./config.env" });

require("./db/conn");

port = process.env.PORT || 8000;

app.use(require("./router/auth"));

app.use(bodyParser.json());

app.use(
  fileUpload({
    useTempFiles: true,
  })
);

app.use("/api", Student);
app.use("/api", Feedback);
app.use("/api", BatchSection);
app.use("/api", Event);

app.listen(port, () => {
  console.log(`Server Started at port ${port}`);
});
