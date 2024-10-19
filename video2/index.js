require('dotenv').config()
const express = require('express') // in cjs
// import express from "express" in esm 
const app = express()

const port = process.env.PORT || 3000
// so here either it will use 3000 or port on dotenv file 

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter' , (req, res) => {
    res.send("new")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
