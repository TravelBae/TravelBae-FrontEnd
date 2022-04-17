import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export default function useGetFullReport() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [fullReport, setFullReport] = useState("");
  const [cookies, setCookies] = useCookies(["cookies"]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/owner/homepage", {
        headers: {
          Accept: `application/json`,
          Authorization: `Bearer ${cookies.token}`,
        },
      })
      .then((res) => {
        setFullReport(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.response);
      });
    setError("");
  }, []);

  return { fullReport, loading, error };
}
