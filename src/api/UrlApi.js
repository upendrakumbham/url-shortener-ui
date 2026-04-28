import axios from "axios";

const API_BASE = "http://localhost:8080";

export const shortenUrl = async (data) => {
    return axios.post(`${API_BASE}/shorten`, data);
};
