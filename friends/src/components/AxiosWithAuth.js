import Axios from 'axios';

const AxiosWithAuth = () => {
    const token = localStorage.getItem('token')
    return Axios.create(
        {
            headers: {authorization: token}
        }
    )
};

export default AxiosWithAuth;