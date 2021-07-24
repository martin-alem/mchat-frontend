import VerificationModel from "../model/VerificationModel.js";

class VerificationController {

    static async verify(phone, code) {

        const data = { "phone": phone, "code": code };
        const response = await VerificationModel.verificationAPI(data);
        return response;
    }

    static async resend(phone) {

        const data = { "phone": phone };
        const response = await VerificationModel.resendAPI(data);
        return response;
    }
}

export default VerificationController;