import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

// Fungsi ini untuk meng-consume API get detail event untuk admin dari backend
//parameter yang ada didalamnya merupakan id dari event
export default function useGetDetailevent(id) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [detailEvent, setDetailevent] = useState("");
  const [cookies, setCookies] = useCookies(["cookies"]);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/event/${id}`, {
        headers: {
          Accept: `application/json`,
          Authorization: `Bearer ${cookies.token}`,
        },
      })
      .then((res) => {
        setDetailevent(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.response.data);
      });
    setError("");
  }, []);

  return { detailEvent, loading, error };
}
