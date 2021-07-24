import SetupModel from "../model/SetupModel.js";

class SetupController {

    static async setup(firstname, lastname, email, password, phone) {

        const data = { "firstname": firstname, "lastname": lastname, "email": email, "password": password, "phone": phone };
        const response = await SetupModel.setupAPI(data);
        return response;
    }
}

export default SetupController;