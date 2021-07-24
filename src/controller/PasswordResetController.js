import PasswordResetModel from "../model/PasswordResetModel.js";

class PasswordResetController {

    static async passwordReset(phone) {

        const data = { "phone": phone };
        const response = await PasswordResetModel.passwordResetAPI(data);
        return response;
    }
}

export default PasswordResetController;