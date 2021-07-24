import ChangePasswordModel from "../model/ChangePasswordModel.js";

class ChangePasswordController {

    static async changePassword(password, phone) {

        const data = { "password": password, "phone": phone };
        const response = await ChangePasswordModel.changePasswordAPI(data);
        return response;
    }
}

export default ChangePasswordController;