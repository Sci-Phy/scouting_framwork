const express = require("express");
var app = express();
const fs = require("fs");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan"); //logging
const moment = require("moment"); //data-time formatting

var address,
  os = require("os"),
  ifaces = os.networkInterfaces();
const port = 80;

app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

const dir = "./reports/";
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

var data = [];
var oldData = [];

var fileName = dir + moment().format("M;D;YYYY;H;mm;ss");
app.use(bodyParser.json({ limit: "1000mb" }));
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: "100mb",
  })
);

//app.use("/", express.static(__dirname + "/dist"));
fileName = dir + moment().format("M;D;YYYY;H;mm;ss");
fs.readdirSync(dir).forEach((file) => {
  console.log("readdirSync");
  // you may want to filter these by extension, etc. to make sure they are JSON files
  if (file.includes(".json") && !file.includes(fileName)) {
    try {
      var records = JSON.parse(fs.readFileSync(dir + file, "utf8"));
      console.log("try, records");
    } catch (e) {
      return;
    }
    for (var i = records.length - 1; i >= 0; i--) {
      console.log("pushing records: " + i);
      oldData.push(records[i]);
    }
  }
});

app.post("/api", function(req, res) {
  newRecords(req.body);
  console.log(req.body);
  res.sendStatus(200);
});

app.get("/api", function(req, res) {
  var allData = [];
  for (var i = oldData.length - 1; i >= 0; i--) {
    allData.push(oldData[i]);
  }
  for (var j = data.length - 1; j >= 0; j--) {
    allData.push(data[i]);
  }
  res.send(JSON.stringify(allData, null, 4));
});

// serverStopper =
app.listen(port, function() {});

for (var dev in ifaces) {
  var iface = ifaces[dev].filter(function(details) {
    return details.family === "IPv4" && details.internal === false;
  });
  if (iface.length > 0) address = iface[0].address;
}
console.log(address);

function convert(obj) {
  //turns object.arrays into strings
  console.log("hit converted");
  for (var key in obj) {
    /***
     * this was previously obj.hasOwnProperty(key)
     * but eslinting sets some rules that disallows that
     * read more here
     * https://eslint.org/docs/rules/no-prototype-builtins
     */
    if (obj.prototype.hasOwnProperty.call(key)) {
      if (obj[key] instanceof Array) {
        obj[key] = obj[key].toString();
        console.log("Object conversion was successful");
      }
    }
    console.log("hit forloop");
  }
  return obj;
}

function newRecords(records) {
  console.log(records);
  console.log("we actually hit the records bro");
  for (var i = records.length - 1; i >= 0; i--) {
    convert(records[i]);
    data.push(records[i]);
    console.log(data);
  }

  fs.writeFile(
    fileName + ".json",
    JSON.stringify(data, null, 4),
    "binary",
    function(err) {
      error(err);
    }
  );
}

function error(err) {
  if (err) {
    return console.log(err);
  }
}
