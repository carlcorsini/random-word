const express = require('express')
const cors = require('cors')
const fs = require('fs')
const port = process.env.PORT || 3030

const app = express()

// CORS for react app, assuming port 3000
app.use(cors())

// read words from json file
const fileContents = fs.readFileSync('./five-letter-words.json', 'utf-8')
const words = JSON.parse(fileContents)
const { fiveLetterWords } = words

app.get('/', (req, res) => {
  // select a random word
  const word =
    fiveLetterWords[Math.floor(Math.random() * fiveLetterWords.length)]

  // return it as the response
  res.send(word)
})

app.listen(port, () => console.log('Word server listening on port 3030!'))

module.exports = app
