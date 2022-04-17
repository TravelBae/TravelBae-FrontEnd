import axios from "axios";
import { useState } from "react";
import { useCookies } from "react-cookie";

export default function useDeleteTourPlace() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [cookies, setCookies] = useCookies(["cookies"]);

  const deleteTourPlace = (id) => {
    setLoading(true);
    axios
      .delete(`http://127.0.0.1:8000/api/tourplaces/${id}`, {
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
  return { deleteTourPlace, loading, error };
}
