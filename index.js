

// in a new folder be sure to run "npm init -y" and "npm install puppeteer"
const puppeteer = require("puppeteer")
const fs = require("fs/promises")
const cron = require('node-cron')

const goodNews = 'https://www.dailyclimate.org/good-news/'
const solutions = 'https://www.dailyclimate.org/solutions/'




cron.schedule('*/10 * * * * *', async () => {        // the date-schedule string requires spaces to function properly

  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(solutions)

   console.log(`Navigating to ${this.url}...`)

   let titles = await page.evaluate(()=> {
      return Array.from(document.querySelectorAll('#col-center > div.widget__head .widget__headline-text')).map(x => x.textContent.trim())
   })

   let dates = await page.evaluate(()=> {
      return Array.from(document.querySelectorAll('#col-center > div.widget__head .social-date__text')).map(x => x.textContent.trim())
   })


   console.log(titles.map((el)=> `${el} - ${dates[titles.indexOf(el)]}`))

   await fs.writeFile('data.txt', titles.map((el)=> `${el} - ${dates[titles.indexOf(el)]}`).join('\r\n'))

  await browser.close()
})


