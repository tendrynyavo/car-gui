import axios from 'axios';

let headers = {
    Authorization : `Bearer ${localStorage.getItem('token')}`
};

export const getList = (modele) => {
    
    // alert( localStorage.getItem('token') );
    return axios.request({
        headers : headers,
        method : "GET",
        url: `${process.env.REACT_APP_API_URL}/api/${modele}`
    });
}

export const ajouter = (data, modele) => {
    return axios.request({
        headers : headers,
        method: "POST",
        url: `${process.env.REACT_APP_API_URL}/api/${modele}`,
        data: data
    });
    // return axios.post(, data);
}

export const supprimer = (id, modele) => {
    return axios.request({
        headers : headers,
        method: "DELETE",
        url: `${process.env.REACT_APP_API_URL}/api/${modele}`
    });
    // return axios.delete(`${process.env.REACT_APP_API_URL}/api/${modele}/${id}`);
}