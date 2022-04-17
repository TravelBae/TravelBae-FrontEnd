import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export default function useGetDetailTourPlace(id) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [detailTourPlace, setDetailTourPlace] = useState("");
  const [cookies, setCookies] = useCookies(["cookies"]);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/tourplaces/${id}`, {
        headers: {
          Accept: `application/json`,
          Authorization: `Bearer ${cookies.token}`,
        },
      })
      .then((res) => {
        setDetailTourPlace(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.response.data);
      });
    setError("");
  }, []);

  return { detailTourPlace, loading, error };
}
