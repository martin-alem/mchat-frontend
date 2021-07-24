import Fetch from "../util/Fetch";


class SetupModel {

    static async setupAPI(data) {

        const url = "https://mchat-signup-yfv5q.ondigitalocean.app/signup/setup";
        const method = "POST";

        const response = await Fetch.makeRequest(url, method, data);
        const json = await response.json();
        return json;
    }

}

export default SetupModel;