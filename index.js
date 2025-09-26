require('dotenv').config();
const { Login } = require('./auth/Login');

const { MemberCreateTemplate, MemberCreate } = require('./actions/MemberCreate');
const { GetReport } = require('./data/GetReport');

(async () => {
    console.log('init');
    //const data = await GetReport(process.env.CRMEMBERREPORTURL);
    //console.log(data);
    const page = await Login();

    const member = await MemberCreateTemplate({
        FirstName: 'Joe',
        LastName: 'Hill',
        Email: 'joe+1@josephdhill.com',
        Phone: '2543758384',
        Address: '701 Sun Meadows',
        City: 'Harker Heights',
        State: 'TX',
        Zip: '76548',
    });

    await MemberCreate(page,member);



})();