const https = require("https");
const configAxios = (token) => {
  const finalObj = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    httpsAgent: new https.Agent({ rejectUnauthorized: false }),
  };
  return finalObj;
};
const loginConfig =
{
    headers:
    {
        "Content-Type": "application/json",
    },
    httpsAgent: new https.Agent({ rejectUnauthorized: false }),
}
module.exports = 
{
    configAxios,
    loginConfig
};
