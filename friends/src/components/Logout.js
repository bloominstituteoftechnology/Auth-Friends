import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Logout = () => {
    const history = useHistory();

        axiosWithAuth()
        .post("/api/logout")
        .then(() => {
            localStorage.removeItem("token");
            history.push("/login")
        })
    }


export default Logout;