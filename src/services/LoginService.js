import axios from 'axios';

//const LOGIN_API_BASE_URL = "http://localhost:8080/api/v1/login";
const LOGIN_API_BASE_URL = "http://ec2-44-202-57-214.compute-1.amazonaws.com:8080/api/v1/login";

class LoginService {
    login(user) {
        return axios.post(LOGIN_API_BASE_URL, user);
    }
}

export default new LoginService();