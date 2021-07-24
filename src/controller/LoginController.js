import LoginModel from "../model/LoginModel.js";

class LoginController {

    static async login(phone, password) {

        const data = { "phone": phone, "password": password };
        const response = await LoginModel.loginAPI(data);
        return response;
    }
}

export default LoginController;