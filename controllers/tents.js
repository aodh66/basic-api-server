const Tent = require("../models/tent")

exports.getTents = async function (req, res) {
  let query = {}

  if (req.params.id) {
    query._id = req.params.id
  }

  try {
    const tents = await Tent.find(query)
    res.status(200).json(tents)
  } catch (err) {
    res.status(500).send(err)
  }
};

exports.addTent = async function (req, res) {
  const tentData = req.body

  try {
    const newTent = new Tent(tentData)
    const tent = newTent.save()
    return res.status(201).json(tent)
  } catch (err) {
    res.status(500).send(err)
  }
};

exports.updateTent = async function (req, res) {
  let query = {}
  const tentData = req.body

  if (req.params.id) {
    query._id = req.params.id
  }

  try {
    await Tent.updateOne({ _id: query._id }, tentData)
    res.sendStatus(200)
  } catch (err) {
    res.status(500).send(err)
  }
};

exports.removeTent = async function (req, res) {
  try {
    await Tent.deleteOne({ _id: req.params.id })
    res.sendStatus(204)
  } catch (err) {
    res.status(500).send(err)
  }
}
