import axios from "axios";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setData } from "../components/store/userSlice";

export default function useLogin() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [cookies, setCookie] = useCookies(["token"]);

  const dispatch = useDispatch();

  const login = (object) => {
    setLoading(true);
    axios
      .post("http://127.0.0.1:8000/api/login", object, {
        headers: {
          Accept: `application/json`,
        },
      })
      .then((res) => {
        dispatch(
          setData({
            role_id: res.data.role_id,
            username: res.data.username,
            isLogin: true,
          })
        );
        setCookie("token", res.data.token, { path: "/" });
        // setCookie("username", res.data.username, { path: "/" });
        // setCookie("roleId", res.data.role_id, { path: "/" });
        // setCookie("isLogin", true, { path: "/" });

        setLoading(false);
        if (res.data.role_id === "1") {
          navigate("/tourplace");
        } else if (res.data.role_id === "2") {
          navigate("/");
        }
      })
      .catch((err) => {
        setLoading(false);
        setError(err.response.data);
      });
    setError("");
  };
  return { login, loading, error };
}
