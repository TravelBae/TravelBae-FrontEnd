import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

// Fungsi ini untuk meng-consume API get all report untuk owner dari backend
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
