
import axios from "axios";
export const DropletURL = "http://localhost:3005/cards";

const getAllDroplets = (token) => {
    return axios.get(`${DropletURL}`, {
        headers: {
            Authorization: `bearer ${token}`,
        },
    });
};

// const getDropletById = (id, token) => {
//     return axios.get(`${DropletURL}/${id}`, {
//         headers: {
//             Authorization: `bearer ${token}`,
//         },
//     });
// };

const getDropletById = (id,) => {
    return axios.get(`${DropletURL}/${id}`);
};

const deleteDropletbyId = (id, token) => {
    const config = {
        headers: {
            Authorization: `bearer ${token}`,
        },
    };
    return axios.delete(`${DropletURL}/${id}`, config);
};

const createDroplet = (formData) => {
    const config = {
        headers: {
            Authorization: `bearer ${window.localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data",
        },
    };
    return axios.post(`${DropletURL}/`, formData, config);
};

const updateDroplet = (DropletId, updatedDropletDetails, token) => {
    return axios.put(`${DropletURL}/${DropletId}`, updatedDropletDetails, {
        headers: {
            Authorization: `bearer ${token}`,
        },
    });
};

const auth = {
    getAllDroplets,
    createDroplet,
    deleteDropletbyId,
    updateDroplet,
    getDropletById
};

export default auth;