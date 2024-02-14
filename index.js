require('dotenv').config();

const { GetReport } = require('./data/GetReport');

(async () => {
    console.log('init');
    const data = await GetReport(process.env.CRMEMBERREPORTURL);

    console.log(data);
})();