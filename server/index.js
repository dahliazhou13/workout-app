require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const db = require('./queries')

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

//Get all exercises
app.get('/exercises', db.getExercise)

// Get all workots
app.get('/workouts', db.getWorkout)

// Get all records
app.get('/records', db.getRecord)

// Get highest weight and highest rep for an exercise
app.get('/records/high', db.getHighestRecord)

// Add a new record
app.post('/records', db.addRecord)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})

