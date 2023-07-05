import axios from "axios";
export const contactURL = "http://localhost:3005/contacts";


const getAllContact = () => {
    return axios.get(`${contactURL}`, {
        headers: {
            Authorization: `bearer ${window.localStorage.getItem("token")}`,
        },
    });
};
const createContact = (formData) => {
    return axios.post(`${contactURL}/`, formData);
};
const deleteContactbyId = (id, token) => {
    const config = {
        headers: {
            Authorization: `bearer ${token}`,
        },
    };
    return axios.delete(`${contactURL}/${id}`, config);
};

const deleteAllContacts = (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    return axios.delete(`${contactURL}`, config);
};
const auth = {
    getAllContact,
    createContact,
    deleteContactbyId,
    deleteAllContacts,
};

export default auth;
