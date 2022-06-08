const express = require('express')
const app = express()
const scrape = require('./index.js')
const json = require('./data.json')
// const {MongoClient} = require('mongodb')


// const index = require('./index.html')



const PORT = process.env.PORT || 3000

let greeting= 'To access Climate News API - add "/api" to url'


// // MongoDB
// async function main() {
//    const uri = 'mongodb+srv://nfolkman:Opt2explore@cluster0.zsst1cd.mongodb.net/?retryWrites=true&w=majority'
//    const client = new MongoClient(uri);

//    try{
//       await client.connect();

//       await listDatabases(client);

//    } catch (e) {
//       console.error(e)
//    } finally {
//       await client.close();
//    }

// }

// main().catch(console.error);


// async function listDatabases(client){
//    databasesList = await client.db().admin().listDatabases();

//    console.log("Databases:");
//    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };



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

app.listen(PORT, ()=> {
   console.log(`App is listening to port ${PORT}`)
})