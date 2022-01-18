const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const {contactsRouter} = require('./routes/api/contacts/contacts')
const {authRouter} = require('./routes/api/auth/auth')
const {usersRouter} = require('./routes/api/users/users')

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(express.static(process.env.FOLDER_FOR_AVATAR))
app.use(cors())
app.use(express.json())

app.use('/api/contacts', contactsRouter)
app.use('/api/auth', authRouter)
app.use('/api/users', usersRouter)

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message })
})

module.exports = app
