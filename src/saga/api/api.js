import axios from "axios";

const serverUrl = 'http://7bb19705cc4c.ngrok.io';

const axiosClient = () => {
    const instance = axios.create({
        responseType: "JSON",
        baseURL: serverUrl,
        // headers: headers(),
    });
    return instance;
}
export {axiosClient};