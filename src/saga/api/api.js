import axios from "axios";

const serverUrl = 'http://547e21ac9fe5.ngrok.io';

const axiosClient = () => {
    const instance = axios.create({
        responseType: "JSON",
        baseURL: serverUrl,
        // headers: headers(),
    });
    return instance;
}
export {axiosClient};