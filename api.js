const express = require('express')
const app = express()
const news = require('./index.js')


const port = process.env.PORT || 3000


app.get('/', (req, res)=> {
   res.send('Daily Climate News')     // this shows up on the local localhost home page
})

app.get('/news', (req, res) => {
   res.send(news)                    // this effectively runs the index.js scraper code
})

app.listen(port, ()=> {
   console.log(`App is listening to port ${port}`)
})