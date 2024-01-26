import axios from 'axios';

export const getList = (modele) => {
    return axios.get(`${process.env.REACT_APP_API_URL}/api/${modele}`);
}

export const ajouter = (data, modele) => {
    return axios.post(`${process.env.REACT_APP_API_URL}/api/${modele}`, data);
}