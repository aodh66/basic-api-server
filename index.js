require("dotenv").config()
const server = require("./server.js")

const { PORT = 8000, NODE_ENV = "development" } = process.env

server.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}`)
})