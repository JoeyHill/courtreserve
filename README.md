# CourtReserve Automation

A Node.js browser automation tool for [CourtReserve](https://app.courtreserve.com) — a sports club management platform. Uses Puppeteer with stealth mode to automate admin tasks like creating members and pulling reports.

## Features

- **Member creation** — programmatically fill and submit the CourtReserve member creation form
- **Report scraping** — authenticate and extract data from CourtReserve's Kendo Grid reports (members, event registrants)
- **Session reuse** — persists browser session to `./userData` to avoid re-login on subsequent runs

## Prerequisites

- Node.js 18+
- A CourtReserve admin account

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Copy the sample env file and fill in your credentials:
   ```bash
   cp sample.env .env
   ```

   | Variable | Description |
   |---|---|
   | `CRUSER` | CourtReserve login email |
   | `CRPASS` | CourtReserve login password |
   | `CRMEMBERREPORTURL` | Full URL from the Members report page |
   | `CREVENTREGISTRANTURL` | Full URL from the Event Registrant report page |

   Report URLs are obtained by navigating to the report in CourtReserve, configuring the desired filters, and copying the URL from the browser.

## Usage

Edit `index.js` to configure the action you want to run, then:

```bash
npm start
```

### Create a member

```js
const page = await Login();

const member = await MemberCreateTemplate({
    FirstName: 'Jane',
    LastName: 'Doe',
    Email: 'jane@example.com',
    Phone: '5551234567',
    Address: '123 Main St',
    City: 'Austin',
    State: 'TX',
    Zip: '78701',
});

await MemberCreate(page, member);
```

`MemberCreateTemplate` fills in defaults for any omitted fields. `MembershipId` defaults to `"97808"` — update this in `actions/MemberCreate.js` for your organization.

### Pull a report

```js
const data = await GetReport(process.env.CRMEMBERREPORTURL);
console.log(data);
```

Returns an array of objects extracted from the Kendo Grid data source.

## Project Structure

```
├── index.js                  # Entry point
├── auth/
│   ├── Login.js              # Puppeteer login flow with session reuse
│   └── Credentials.js        # Loads credentials from environment
├── actions/
│   ├── MemberCreate.js       # Member creation form automation
│   └── MemberPackage.js      # (stub)
├── data/
│   └── GetReport.js          # Report data extraction
├── common/
│   ├── membercreateform.js   # CSS selectors for the member create form
│   └── funcs.js              # Utility helpers
└── models/
    ├── Member.js             # Example member data shape
    └── EventRegistrant.js    # Example event registrant data shape
```

## Notes

- The browser runs in non-headless mode (`headless: false`) by default so you can observe automation and handle any REDACTEDPTCHAs or MFA prompts manually.
- `puppeteer-extra-plugin-stealth` is used to reduce bot detection.
- The `userData` directory stores the browser session — delete it to force a fresh login.
