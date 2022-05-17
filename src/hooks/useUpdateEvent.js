import axios from "axios";
import { useState } from "react";
import { useCookies } from "react-cookie";

// Fungsi ini untuk meng-consume API update event untuk admin dari backend
//parameter yang ada didalamnya merupakan id dari event
export default function useUpdateEvent(id) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [cookies, setCookies] = useCookies(["cookies"]);

  const updateEvent = (object) => {
    setLoading(true);

    axios
      .put(`http://127.0.0.1:8000/api/event/${id}`, object, {
        headers: {
          Accept: `application/json`,
          Authorization: `Bearer ${cookies.token}`,
        },
      })
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.response.data);
      });
    setError("");
  };
  return { updateEvent, loading, error };
}
