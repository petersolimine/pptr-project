const puppeteer = require('puppeteer');

describe('my first puppeteer test', () =>{ 
    it('should launch the browser'), async function() {
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 10,
            devtools: false,
        });
        const page = await browser.newPage();
        await page.goto('http://www.example.com');

    }
})