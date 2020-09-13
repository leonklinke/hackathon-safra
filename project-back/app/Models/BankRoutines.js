'use strict'
const axios = use('axios');

class BankRoutines { }
BankRoutines.transfer = async (from, to) => {
  const api = axios.create({
    baseURL: "https://idcs-902a944ff6854c5fbe94750e48d66be5.identity.oraclecloud.com"
  })

  api.interceptors.request.use(async config => {
    let data = from.safra_client_id + ":" + from.safra_secret;
    let token = Buffer.from(data).toString('base64');
    config.headers.Authorization = `Basic ${token}`;
    return config;
  });
  try {
    const response = await api.post('/oauth2/v1/token', 'grant_type=client_credentials&scope=urn:opc:resource:consumer::all')
    let accessToken = response.data.access_token

  } catch (err) {
    console.log("error inside", err)
  }


}

module.exports = BankRoutines
