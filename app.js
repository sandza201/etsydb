// app.js

const express = require('express')
const app = express()

// Define middleware
app.use(express.json())

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, world!')
})

// Start the server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})