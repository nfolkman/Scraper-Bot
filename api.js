const express = require('express')
const app = express()
const scrape = require('./index.js')
const json = require('./data.json')
const cron = require('node-cron')
// const {MongoClient} = require('mongodb')


// const index = require('./index.html')



const PORT = process.env.PORT || 3000

let greeting= 'To access Climate News API - add "/api" to url'



// shows up on the local localhost home page
app.get('/', (req, res)=> {
   res.send(greeting) 
   res.send(scrape)
})


// runs the index.js scraper code BUT the code doesn't show up on local server

app.get('/api', (req, res) => {
   // res.send(scrape)
   res.json(json)                    
})


cron.schedule('* * * * *', async () => {   // I'm just trying things at this point lol
   app.post('/api', (req, res) => {
      res.json(json)
   })
})


app.listen(PORT, ()=> {
   console.log(`App is listening to port ${PORT}`)
})