require('dotenv').config()
const Pool = require('pg').Pool
const pool = new Pool({
    user: process.env.DB_USERNAME,
    host: process.env.DB_HOST,
    database: process.env.DB,
    password: process.env.DB_PASSWORD,
    port: 5432,
})

const getExercise = (request, response) => {
    pool.query('SELECT * FROM Exercise ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getWorkout = (request, response) => {
    pool.query('SELECT * FROM Workout', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getRecord = (request, response) => {
    pool.query('SELECT * FROM Record', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getHighestRecord = (request, response) => {
    const exercise = request.query.exercise;
    const rep = request.query.rep;
    
    pool.query('SELECT weight, actual FROM Record WHERE exercise = $1 and rep = $2 ORDER BY weight DESC, actual DESC LIMIT 1', [exercise, rep], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

// add a new record
const addRecord = (request, response) => {
    const { exercise, rep, actual, time, weight } = request.body

    pool.query('INSERT INTO Record (exercise, rep, actual, time, weight) VALUES ($1, $2, $3, $4)', [exercise, rep, actual, time, weight], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`User added with ID: ${result.insertId}`)
    })
}

module.exports = {
    getExercise,
    getWorkout,
    getRecord,
    addRecord,
    getHighestRecord
}