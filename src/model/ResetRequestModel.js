import Fetch from "../util/Fetch";


class ResetRequestModel {

    static async resetRequestAPI(data) {

        const url = "https://mchat-reset-gxzxc.ondigitalocean.app/reset/verify";
        const method = "POST";

        const response = await Fetch.makeRequest(url, method, data);
        const json = await response.json();
        return json;
    }

    static async resendAPI(data) {

        const url = "https://mchat-reset-gxzxc.ondigitalocean.app/reset/resend";
        const method = "POST";

        const response = await Fetch.makeRequest(url, method, data);
        const json = await response.json();
        return json;
    }

}

export default ResetRequestModel;