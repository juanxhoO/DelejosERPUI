import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const useLogout = () => {
  console.log("click");
  const navigate = useNavigate();
  const { setAuth } = useAuth;
  const logout = async () => {
    setAuth({});
    try {
      const response = await axios.post("/api/logout", { withCredentials: true });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
    navigate("/login");
    return logout;
  };
};

export default useLogout;