import axios from 'axios';

export const getList = (modele) => {
    return axios.get(`${process.env.REACT_APP_API_URL}/api/${modele}`);
}

export const ajouter = (data, modele) => {
    return axios.post(`${process.env.REACT_APP_API_URL}/api/${modele}`, data);
}

export const supprimer = (id, modele) => {
    return axios.delete(`${process.env.REACT_APP_API_URL}/api/${modele}/${id}`);
}