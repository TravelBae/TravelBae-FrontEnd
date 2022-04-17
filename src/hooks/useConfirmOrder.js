import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export default function useConfirmOrder() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [cookies, setCookies] = useCookies(["cookies"]);

  const confirmOrder = (id) => {
    setLoading(true);
    axios
      .get(`http://127.0.0.1:8000/api/admin/confirmation/${id}`, {
        headers: {
          Accept: `application/json`,
          Authorization: `Bearer ${cookies.token}`,
        },
      })
      .then((res) => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.response.data);
      });
    setError("");
  };

  return { confirmOrder, loading, error };
}
