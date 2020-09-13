'use strict'
const axios = use('axios');

class BankRoutines { }
BankRoutines.transfer = async (from, to, value) => {
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
    //get accessToken
    const response = await api.post('/oauth2/v1/token', 'grant_type=client_credentials&scope=urn:opc:resource:consumer::all')
    const apiHost = axios.create({
      baseURL: "https://af3tqle6wgdocsdirzlfrq7w5m.apigateway.sa-saopaulo-1.oci.customer-oci.com/fiap-sandbox"
    })
    let accessToken = response.data.access_token
    console.log("to", to.data.DestinyAccount)
    apiHost.interceptors.request.use(async config => {
      config.headers.Authorization = `Bearer ${accessToken}`;
      return config;
    });
    //transfer value from user to startup
    //simulando uma conta 00711234511 do usuário
    const responseTransfer = await apiHost.post('/accounts/v1/accounts/00711234511/transfers', {
      "Type": "TEF",



      "TransactionInformation": "Investimento", "DestinyAccount": {
        "Bank": "422",
        "Agency": "0071",
        "Id": "1234533",
        "Cpf": "12345678933",
        "Name": "Mark Zuckerberg da Silva",
        "Goal": "Credit"
      },
      "Amount": {
        "Amount": "250.00",
        "Currency": "BRL"
      }
    })

    console.log('response', responseTransfer)
  } catch (err) {
    console.log("error inside", err)
  }


}

module.exports = BankRoutines
