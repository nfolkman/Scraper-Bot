

// in a new folder be sure to run "npm init -y" and "npm install puppeteer"
const puppeteer = require("puppeteer")
const fs = require("fs/promises")
const cron = require('node-cron')
const express = require('express')
const { json } = require("express/lib/response")
const res = require("express/lib/response")
const app = express()





const goodNews = 'https://www.dailyclimate.org/good-news/'
const solutions = 'https://www.dailyclimate.org/solutions/'



// Schedule/Automation Code - (the date-schedule string requires spaces to function properly)

let scrape = cron.schedule('*/10 * * * *', async () => {        

// let scrape = async () => {


   // Navigation to webpage
   
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(solutions)

   console.log(`Navigating to ${solutions}...`)



   // Data Scraping
   
   let titles = await page.evaluate(()=> {
      return Array.from(document.querySelectorAll('#col-center > div.widget__head .widget__headline-text')).map(x => x.textContent.trim())
   })

   let description = await page.evaluate(()=> {
      return Array.from(document.querySelectorAll('#col-center > div.widget__body.clearfix.sm-mt-1 .body-description')).map(x => x.textContent.trim())
   })

   let dates = await page.evaluate(()=> {
      return Array.from(document.querySelectorAll('#col-center > div.widget__head .social-date__text')).map(x => x.textContent.trim())
   })



   // Parse Data into JSON Object

   const json = {
      "articles": [
         {
            "title": `${titles[0]}`,
            "description": `${description[0]}`,
            "date": `${dates[0]}`
         },
         {
            "title": `${titles[1]}`,
            "description": `${description[1]}`,
            "date": `${dates[1]}`
         },
         {
            "title": `${titles[2]}`,
            "description": `${description[2]}`,
            "date": `${dates[2]}`
         },
         {
            "title": `${titles[3]}`,
            "description": `${description[3]}`,
            "date": `${dates[3]}`
         },
         {
            "title": `${titles[4]}`,
            "description": `${description[4]}`,
            "date": `${dates[4]}`
         },
         {
            "title": `${titles[5]}`,
            "description": `${description[5]}`,
            "date": `${dates[5]}`
         },
         {
            "title": `${titles[6]}`,
            "description": `${description[6]}`,
            "date": `${dates[6]}`
         },
         {
            "title": `${titles[7]}`,
            "description": `${description[7]}`,
            "date": `${dates[7]}`
         },
         {
            "title": `${titles[8]}`,
            "description": `${description[8]}`,
            "date": `${dates[8]}`
         },
         {
            "title": `${titles[9]}`,
            "description": `${description[9]}`,
            "date": `${dates[9]}`
         },
      ]
   }
   




   await console.log(json)
   
   // when I run the api (located in the separate api.js file), the scraped data logs to the console as written, which means the called api is running this other page of code successfully

   
   // the problem is I can't figure out how to code it so the running api deposits the scraped json data to the DOM
   await fs.writeFile('data.json', JSON.stringify(json))             


  await browser.close()
})

// scrape()










