const puppeteer = require('puppeteer');

const robotScreenshots = async () => {
	const browser = await puppeteer.launch({ headless: true });
	const page = await browser.newPage();

	/* lista dos sites */
	const arraySites = [
		'https://www.google.com/',
		'https://play.google.com/',
		'https://www.youtube.com/',
		'https://news.google.com/',
		'https://stackoverflow.com/',
		'https://github.com/',
	];

	for (let i = 0; i < arraySites.length; i++) {
		await page.goto(arraySites[i]); //abre a pag

		await page.screenshot({ path: `./screenshots/screenshot${i + 1}.png` }); //tira o print
	}

	await browser.close(); //fecha o browser
};

robotScreenshots();
