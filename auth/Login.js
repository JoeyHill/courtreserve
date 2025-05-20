const puppeteer = require('puppeteer-extra');

const extraStealth = require('puppeteer-extra-plugin-stealth');

const { Credentials } = require('./Credentials');

module.exports.Login = async function (
    url = 'https://app.courtreserve.com/Account/Login', options = {
        usernameSelector: '[name=Username]',
        passwordSelector: '[name=Password',
        submitSelector: '.btn-submit',
        awaitSelector: '.k-loading-image',
        confirmLoginSelector: '[href="/Account/LogOut"]'
    }
)
{
    console.log('Logging in...');
    console.time('login');

    puppeteer.use(extraStealth());

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(url);

    await page.waitForNetworkIdle();

    await page.type(options.usernameSelector, Credentials.username);

    await page.type(options.passwordSelector, Credentials.password);

    await page.click(options.submitSelector);

    await page.waitForNavigation({
        waitUntil: "networkidle0",
    });

    await page.waitForSelector(options.awaitSelector, { hidden: true });

		const logOutButton = await page.$(options.confirmLoginSelector);

		if (logOutButton) {
			console.log("Logged in successfully");
			console.timeEnd("login");
			return page;
		}

		console.log({
			html: page.content(),
			data: "Login Unsuccessful",
		});
		console.timeEnd("login");
		await browser.close();
}