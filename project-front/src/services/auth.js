var axios = require('axios');

function convertBase64(param)
{
    var strBase64 = "Basic " + btoa(param);
    return strBase64;
}

const Auth = {};

Auth.doLogin = async (data) => {
    try {
        
        var config = {
            headers: {
                'cache-control': 'no-cache',
                'content-type': 'application/x-www-form-urlencoded',
                'authorization': convertBase64(data),
                'postman-token': '280d6ac2-0e1c-d7ed-fc20-85de145f3d1c'
            }
        }

        const body = "grant_type=client_credentials&scope=urn:opc:resource:consumer::all";
    
        const response = await axios.post('https://idcs-902a944ff6854c5fbe94750e48d66be5.identity.oraclecloud.com/oauth2/v1/token', body, config);

        return await response.data;

    } catch (err) {
        console.log(err);
    }
}
export default Auth;