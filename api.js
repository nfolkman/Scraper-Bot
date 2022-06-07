const express = require('express')
const app = express()
const scrape = require('./index.js')
const json = require('./data.json')



const PORT = process.env.PORT || 3000

let greeting= 'Daily Climate News'



// shows up on the local localhost home page
app.get('/', (req, res)=> {
   res.send(greeting) 
   res.send(scrape)    
})


// runs the index.js scraper code BUT the code doesn't show up on local server
app.get('/api/news', (req, res) => {
   // res.send(scrape)
   res.json(json)                    
})

app.listen(PORT, ()=> {
   console.log(`App is listening to port ${PORT}`)
})