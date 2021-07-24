import Fetch from "../util/Fetch";


class ChangePasswordModel {

    static async changePasswordAPI(data) {

        const url = "https://mchat-reset-gxzxc.ondigitalocean.app/reset/change";
        const method = "POST";

        const response = await Fetch.makeRequest(url, method, data);
        const json = await response.json();
        return json;
    }

}

export default ChangePasswordModel;