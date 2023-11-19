//routes index
module.exports = function (app) {
  
    app.use(`/api/tents`, require("./tents"))
  
    // catch all routes to show 404 error when all other routes fail
    app.all("*", (req, res) => {
      res.sendStatus(404)
    })
  }