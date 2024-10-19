// routing means taking to user to another webpages using /
// moogoose , drizzle , prisma are the used as middle man to interact with DB

import express from 'express'

const app = express()
const port = 3000

app.use(express.json())
  
// to print something 
app.get('/new' , (req, res) => {
    res.send("nothing to see here ohk!!")

})


let teaData = []
let nextId = 1 
// creating the data 
app.post('/teas', (req, res) => { 
    const {name , price} = req.body 
    const newTea  = {id : nextId++ , name , price}
    teaData.push(newTea)
    res.status(201).send(newTea)
}) 

// read the data 
app.get('/teas', (req, res) => {
    res.status(200).send(teaData) 
})

// get data with id 
app.get('/teas/:id' , (req, res) => {
    const tea = teaData.find(t => t.id === parseInt(req.params.id))
    if (!tea) {
        return res.status(404).send('not found any thing')
    }
    res.status(200).send(tea)
})

// updatation 
app.put('/teas/:id', (req, res) => {
    const tea = teaData.find(t => t.id === parseInt(req.params.id))
    if (!tea) {
        return res.status(404).send('not found any thing')
    }
    const {name , price} = req.body
    tea.name = name    
    tea.price = price 
    res.status(200).send(tea)
})

// deletion 
app.delete('/teas/:id', (req, res) => { 
    const index = teaData.findIndex(t => t.id === parseInt(req.params.id)) // here params is used to take from url 
    if(index === -1) {
        return res.status(404).send('tea not found')
    }
    teaData.splice(index , 1)
    return res.status(200).send('deleted')
})




app.listen(port , () => {
    console.log(`server is running at port : ${port}...`)
})              