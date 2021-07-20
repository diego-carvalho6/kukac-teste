const express = require("express");
const cors = require("cors");
var fs = require("fs");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.get("/vehicles", (req, res) => {
  fs.readFile("db.json", "utf8", function readFileCallback(err, data) {
    if (err) {
      return res.send({ error: "bad request" }, 400);
    } else {
      obj = JSON.parse(data);
    }
    return res.send({ result: obj }, 200);
  });
});

app.post("/register-car", (req, res) => {
  var json = JSON.stringify(req.body);

  fs.readFile("db.json", "utf8", function readFileCallback(err, data) {
    if (err) {
      console.log("error");
    } else {
      var obj = JSON.parse(data);
      obj.car.push(JSON.parse(json));
    }
    json = JSON.stringify(obj); //convert it back to json
    fs.writeFile("db.json", json, function (err) {
      if (err) throw err;
    });
  });
  return res.send({ msg: "created" }, 201);
});

app.post("/register-motorcycle", (req, res) => {
  var json = JSON.stringify(req.body);

  fs.readFile("db.json", "utf8", function readFileCallback(err, data) {
    if (err) {
      console.log("error");
    } else {
      var obj = JSON.parse(data);
      obj.motorcycle.push(JSON.parse(json));
    }
    json = JSON.stringify(obj); //convert it back to json
    fs.writeFile("db.json", json, function (err) {
      if (err) throw err;
    });
  });
  return res.send({ msg: "created" }, 201);
});

app.listen(4300, () => {
  console.log("teste");
});
