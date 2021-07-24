import ResetRequestModel from "../model/ResetRequestModel.js";

class ResetRequestController {

    static async verify(phone, code) {

        const data = { "phone": phone, "code": code };
        const response = await ResetRequestModel.resetRequestAPI(data);
        return response;
    }

    static async resend(phone) {

        const data = { "phone": phone };
        const response = await ResetRequestModel.resendAPI(data);
        return response;
    }
}

export default ResetRequestController;