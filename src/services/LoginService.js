import axios from "axios";

export class LoginService {
    //validate user
    async validateUser(username, password) {
        try {
            const response = await axios.post(
                "http://localhost:5000/api/auth/login",
                {
                    username: username,
                    password: password,
                }
            );
            localStorage.setItem("token", "123");
            return response;
        } catch (error) {
            console.error(error);
        }
    }
}
