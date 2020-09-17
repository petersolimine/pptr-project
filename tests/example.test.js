const puppeteer = require('puppeteer');


describe('my first puppeteer test', () =>{ 
    it('should launch the browser', async function() {
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 10,
            devtools: false,
        });
        const page = await browser.newPage();
        await page.goto('http://www.example.com');
        const title = await page.title();
        const url = await page.url();
        const text = await page.$eval('h1', element => element.textContent);
        const count = await page.$$eval('p', element => element.length);
        await page.waitFor(3000);
        console.log('number of p tags on page ' + count );
        console.log(' text in h1: ' + text);
        await browser.close()


    })
});