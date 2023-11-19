const mongoose = require("mongoose")

const { DB_URL = "mongodb://127.0.0.1/test" } = process.env

async function connect() {
  await mongoose.connect(DB_URL)
}

connect().catch((err) => console.log(err))