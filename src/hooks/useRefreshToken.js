import axios from 'axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const { setAuth } = useAuth();

    const refresh = async () => {
        const response = await axios.post('http://localhost:3000/v1/auth/refresh-tokens',{}, {
            withCredentials: true,
            headers: { 'Content-Type': 'application/json' },
        });
        setAuth(prev => {
            console.log(JSON.stringify(prev));
            console.log(response.data);
            return {
                ...prev,
                accessToken: response.data.access.token
            }
        });
        return response.data.access.token;
    }
    return refresh;
};

export default useRefreshToken;