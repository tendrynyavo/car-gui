import axios from 'axios';


console.log(`Bearer ${localStorage.getItem('token')}`);

export const getList = (modele) => {
    let headers = {
        Authorization : `Bearer ${localStorage.getItem('token')}`
    };
    return axios.request({
        headers : headers,
        method : "GET",
        url: `${process.env.REACT_APP_API_URL}/api/${modele}`
    });
}

export const ajouter = (data, modele) => {
    let headers = {
        Authorization : `Bearer ${localStorage.getItem('token')}`
    };
    return axios.request({
        headers : headers,
        method: "POST",
        url: `${process.env.REACT_APP_API_URL}/api/${modele}`,
        data: data
    });
}

export const supprimer = (id, modele) => {
    let headers = {
        Authorization : `Bearer ${localStorage.getItem('token')}`
    };
    return axios.request({
        headers : headers,
        method: "DELETE",
        url: `${process.env.REACT_APP_API_URL}/api/${modele}`
    });
    // return axios.delete(`${process.env.REACT_APP_API_URL}/api/${modele}/${id}`);
}

export const executeRequest = ( method, modele, data ) => {
    let headers = {
        Authorization : `Bearer ${localStorage.getItem('token')}`
    };
    return axios.request({
        headers: headers,
        method: method,
        url: `${process.env.REACT_APP_API_URL}/api/${modele}`,
        data: data
    });
};
