import Fetch from "../util/Fetch";


class LoginModel {

    static async loginAPI(data) {

        const url = "https://mchat-auth-35x46.ondigitalocean.app/authenticate/login";
        const method = "POST";

        const response = await Fetch.makeRequest(url, method, data);
        const json = await response.json();
        return json;
    }

}

export default LoginModel;