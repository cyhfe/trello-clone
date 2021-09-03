const router = require("express").Router();
const fs = require("fs");
const path = require("path");

const DATA_FILE = path.join(__dirname, "data.json");

router.get("/load", (req, res) => {
  fs.readFile(DATA_FILE, (err, data) => {
    res.json(JSON.parse(data));
  });
});

router.post("/save", (req, res) => {
  const data = JSON.stringify(req.body, null, 2);
  fs.writeFile(DATA_FILE, data, () => {
    res.json({ success: true });
  });
});

module.exports = router;
