import axios from "axios"; 
  
class AuthService {

    getRecords(url) {
        return axios.get(url);
    }

    getRecordById(url) {
        return axios.get(url);
    }

    createRecord(url, record) {
        return axios.post(url, record);
    }

    updateRecord(url, record) {
        return axios.post(url, record);
    }

    deleteRecord(url) {
        return axios.get(url);
    }

    deleteRecords(url, record) {
        return axios.post( url, record);
    }

}
export default new AuthService();
