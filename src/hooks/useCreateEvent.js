import axios from "axios";
import { useState } from "react";
import { useCookies } from "react-cookie";

// Fungsi ini untuk meng-consume API create event untuk admin dari backend
export default function useCreateEvent() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [cookies, setCookies] = useCookies(["cookies"]);

  const createEvent = (object) => {
    setLoading(true);

    axios
      .post("http://127.0.0.1:8000/api/event", object, {
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
  return { createEvent, loading, error };
}
