import Fetch from "../util/Fetch";


class PasswordResetModel {

    static async passwordResetAPI(data) {

        const url = "https://mchat-reset-gxzxc.ondigitalocean.app/reset";
        const method = "POST";

        const response = await Fetch.makeRequest(url, method, data);
        const json = await response.json();
        return json;
    }

}

export default PasswordResetModel;