import Fetch from "../util/Fetch";


class VerificationModel {

    static async verificationAPI(data) {

        const url = "https://mchat-signup-yfv5q.ondigitalocean.app/signup/verify";
        const method = "POST";

        const response = await Fetch.makeRequest(url, method, data);
        const json = await response.json();
        return json;
    }

    static async resendAPI(data) {

        const url = "https://mchat-signup-yfv5q.ondigitalocean.app/signup/verify/resend";
        const method = "POST";

        const response = await Fetch.makeRequest(url, method, data);
        const json = await response.json();
        return json;
    }

}

export default VerificationModel;