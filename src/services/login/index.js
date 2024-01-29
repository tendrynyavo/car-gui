import axios from 'axios';

export async function login(data) {
    return axios.post(
        `${process.env.REACT_APP_API_URL}/api/users/authentificationAdmin`
        , data
    );
}