
import axios from "axios";
export const CardURL = "http://localhost:3005/cards";

const getAllCards = (token) => {
    return axios.get(`${CardURL}`, {
        headers: {
            Authorization: `bearer ${token}`,
        },
    });
};

const getCardById = (id, token) => {
    return axios.get(`${CardURL}/${id}`, {
        headers: {
            Authorization: `bearer ${token}`,
        },
    });
};

const deleteCardbyId = (id, token) => {
    const config = {
        headers: {
            Authorization: `bearer ${token}`,
        },
    };
    return axios.delete(`${CardURL}/${id}`, config);
};

const createCard = (formData) => {
    const config = {
        headers: {
            Authorization: `bearer ${window.localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data",
        },
    };
    return axios.post(`${CardURL}/`, formData, config);
};

const updateCard = (CardId, updatedCardDetails, token) => {
    return axios.put(`${CardURL}/${CardId}`, updatedCardDetails, {
        headers: {
            Authorization: `bearer ${token}`,
        },
    });
};

const auth = {
    getAllCards,
    createCard,
    deleteCardbyId,
    updateCard,
    getCardById
};

export default auth;