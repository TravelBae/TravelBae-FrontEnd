import axios from "axios";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { setData } from "../components/store/userSlice";

// Fungsi ini untuk meng-consume API logout dari backend
export default function useLogout() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  const logout = (object) => {
    setLoading(true);
    axios
      .post("http://127.0.0.1:8000/api/logout", object, {
        headers: {
          Accept: `application/json`,
          Authorization: `Bearer ${cookies.token}`,
        },
      })
      .then((res) => {
        removeCookie("token");
        window.location.replace("http://localhost:3000/roles");

        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.response.data);
      });
    setError("");
  };
  return { logout, loading, error };
}
