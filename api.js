const express = require('express')
const app = express()
const news = require('./index.js')




const port = process.env.PORT || 3000

let greeting= 'Daily Climate News'



// shows up on the local localhost home page
app.get('/', (req, res)=> {
   res.send(greeting)     
})


// runs the index.js scraper code BUT the code doesn't show up on local server
app.get('/news', (req, res) => {
   res.send(news)                    
})

app.listen(port, ()=> {
   console.log(`App is listening to port ${port}`)
})