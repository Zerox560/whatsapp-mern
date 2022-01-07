import axios from "axios";

const instance = axios.create({
    baseURL: "https://whatsapp-project-back.herokuapp.com/api/v1"
});

export default instance;