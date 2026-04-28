import axios from "axios";

const API_BASE = "http://localhost:8080";

export const shortenUrl = async (data) => {
    return axios.post(`${API_BASE}/shorten`, data);
};

export const getAllUrls = () => {
    return axios.get(`${API_BASE}/urls`);
};

export const deleteUrl = (alias) => {
    return axios.delete(`${API_BASE}/${alias}`);
};

// NOTE: redirect endpoint returns 302 → browser handles it
export const redirectToFullUrl = (alias) => {
    window.open(`${API_BASE}/${alias}`, "_blank");
};
