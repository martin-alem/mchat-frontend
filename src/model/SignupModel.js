import Fetch from "../util/Fetch";


class SignupModel {

    static async signupAPI(data) {

        const url = "https://mchat-signup-yfv5q.ondigitalocean.app/signup";
        const method = "POST";

        const response = await Fetch.makeRequest(url, method, data);
        const json = await response.json();
        return json;
    }

}

export default SignupModel;