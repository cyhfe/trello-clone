const router = require("express").Router();

router.get("/load", (req, res) => {
  res.send("hello load");
});

router.post("/save", (req, res) => {
  res.send("save");
});

module.exports = router;
