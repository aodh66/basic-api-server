//routes/tents
const express = require("express")
const router = express.Router()
const {
  getTents,
  addTent,
  updateTent,
  removeTent,
} = require("../controllers/tents")

router.get("/:id?", getTents).post("/", addTent).put("/:id", updateTent).delete("/:id", removeTent)

module.exports = router