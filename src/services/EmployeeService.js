import axios from 'axios';

//const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";
const EMPLOYEE_API_BASE_URL = "http://ec2-44-202-57-214.compute-1.amazonaws.com:8080/api/v1/employees";

class EmployeeService {
    getEmployees() {
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployee(employee) {
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    getEmployeeById(id) {
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + id);
    }

    updateEmployee(employee, id) {
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + id, employee);
    }

    deleteEmployee(id) {
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + id);
    }
}

export default new EmployeeService()