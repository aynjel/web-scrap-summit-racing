const puppeteer = require('puppeteer');

// fix Puppeteer old Headless deprecation warning
process.env['PUPPETEER_PRODUCT'] = 'chrome';

async function run() {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    await page.goto('https://portfolio-phi-five-40.vercel.app/');
    // await page.goto('https://summitracing.com');

    // await page.screenshot({path: 'summitracing.png', fullPage: true});
    // await page.pdf({ path: 'summitracing.pdf', format: 'A4' });

    // const html = await page.content();

    const title = await page.evaluate(() => {
        if (document.title) {
            return document.title;
        }else{
            return 'No title';
        }
    });
    console.log(title);

    await browser.close();
}
    
run();