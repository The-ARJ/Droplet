
import axios from "axios";
export const TemplateURL = "http://localhost:3005/templates";
// export const TemplateURL = "http://cardova-api-production.up.railway.app/templates";

const getAllTemplates = (token) => {
    return axios.get(`${TemplateURL}`, {
        headers: {
            Authorization: `bearer ${token}`,
        },
    });
};

// const getTemplateById = (id, token) => {
//     return axios.get(`${TemplateURL}/${id}`, {
//         headers: {
//             Authorization: `bearer ${token}`,
//         },
//     });
// };
const getTemplateById = (id) => {
    return axios.get(`${TemplateURL}/${id}`);
};

const deleteTemplatebyId = (id, token) => {
    const config = {
        headers: {
            Authorization: `bearer ${token}`,
        },
    };
    return axios.delete(`${TemplateURL}/${id}`, config);
};

const createTemplate = (formData) => {
    const config = {
        headers: {
            Authorization: `bearer ${window.localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data",
        },
    };
    return axios.post(`${TemplateURL}/`, formData, config);
};

const updateTemplate = (TemplateId, updatedTemplateDetails, token) => {
    return axios.put(`${TemplateURL}/${TemplateId}`, updatedTemplateDetails, {
        headers: {
            Authorization: `bearer ${token}`,
        },
    });
};

const auth = {
    getAllTemplates,
    createTemplate,
    deleteTemplatebyId,
    updateTemplate,
    getTemplateById
};

export default auth;