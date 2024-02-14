const { Login } = require('../auth/Login');

module.exports.GetReport = async function (url) {
    const result = await Login()
        .then(async (page) => {
            console.log('Grabbing report');
            console.time('Report');

            try {
                await page.goto(url, { waitUntil: 'load' });
                await page.waitForSelector('.k-loading-image', { hidden: true });
                console.log('Data Loaded');
                const data = await page.evaluate(() => {
                    const data = $('#grid').data('kendoGrid').dataSource.data();
                    const objects = [];

                    data.forEach((person) => {
                        objects.push(person);
                    })
                    return objects;
                });
                return data;
            }
            catch (e) {
                console.log(e);
            }
            finally {
                console.timeEnd('Report');
                await page.browser().close();
            }
        });
    
    return result;
}