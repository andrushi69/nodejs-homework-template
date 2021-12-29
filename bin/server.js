const app = require('../app')
const db = require("../db/database")


const PORT = process.env.PORT

db.then(() => {
  app.listen(PORT, () => {
    console.log(`Server running. Use our API on port: ${PORT}`)
  })
}).catch(err => {
  console.log(`Server not running: ${err.message}`)
})

