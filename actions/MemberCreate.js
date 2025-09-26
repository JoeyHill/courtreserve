const { formInputs } = require('../common/membercreateform');
const { Login } = require('../auth/Login');

module.exports.MemberCreateTemplate = function (memberData = {}) {
    const template = {
        FirstName: memberData.FirstName || '',
        LastName: memberData.LastName || '',
        Email: memberData.Email || `joe+${Math.floor(Math.random()*1000)}@josephdhill.com`,
        PhoneNumber: memberData.Phone || '2543758384',
        Address: memberData.Address || '701 Sun Meadows',
        City: memberData.City || 'Harker Heights',
        State: memberData.State || 'TX',
        ZipCode: memberData.Zip || '76548',
        MembershipId: "97808"
    }
    return template;
}

module.exports.MemberCreateURL = function () {
    return `https://app.courtreserve.com/`;
}

module.exports.MemberCreate = async function (page, memberData) {
    const template = module.exports.MemberCreateTemplate(memberData);
    const url = module.exports.MemberCreateURL();
    await page.goto(url);
    await page.waitForSelector('i.fa-users');
    await page.click('i.fa-users');
    
    

    // Wait for and click the element

    await page.click('[data-remote*="/Member/Create"]');
    await page.waitForSelector('button.save-member');
    
    console.log('Navigated to member create page');
    console.log('Filling out form');
    console.log(template);
    for (const key in template) {
        const selector = formInputs.find(input => input.name === key).selector;
        if(selector) {
            await page.type(selector, template[key], { delay: 100 });
        }
    }
    //await page.click('#SendWelcomeEmail');
    //await page.click('button.save-member');
}