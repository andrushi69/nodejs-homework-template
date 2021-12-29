const mongoose = require('mongoose');
const {connect, connection} = mongoose;


const uri = process.env.URI_DB
const db = connect(uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });


connection.on("connected", () => {
  console.log("Mongoose connected to Db")
})
connection.on("disconnect", () => {
  console.log("Mongoose disconnected from Db")
})
connection.on("err", (err) => {
  console.log(`Mongoose connection error: ${err.message}`)
})

process.on("SIGINT", () => {
  connection.close()
  console.log("Db connection closed")
  process.exit(1)
})

module.exports = db