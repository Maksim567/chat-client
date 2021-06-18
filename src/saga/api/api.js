import axios from "axios";

const serverUrl = 'http://84f10ee60bc4.ngrok.io';

const axiosClient = () => {
    const instance = axios.create({
        responseType: "JSON",
        baseURL: serverUrl,
        // headers: headers(),
    });
    return instance;
}
export {axiosClient};