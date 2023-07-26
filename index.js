const intercom = require('intercom-client')
require("dotenv").config();
const client = new intercom.Client({ tokenAuth: { token: "tokentoaccessintercom" } });

async function getAdmins() {
  try {
    const result = await client.admins.list();
    console.table(result.admins);
  } catch (error) {
    if (error.statusCode === 401) {
      console.log("All set!");
    } else {
      throw error;
    }
  }
}

getAdmins();
