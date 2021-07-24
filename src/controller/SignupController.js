import SignupModel from "../model/SignupModel.js";

class SignupController {

    static async signup(phone) {

        const data = { "phone": phone };
        const response = await SignupModel.signupAPI(data);
        return response;
    }
}

export default SignupController;