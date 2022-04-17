import axios from "axios";
import { useState } from "react";
import { useCookies } from "react-cookie";

export default function useCreateTourPlace() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [cookies, setCookies] = useCookies(["cookies"]);

  const createTourPlace = (object) => {
    setLoading(true);

    axios
      .post("http://127.0.0.1:8000/api/tourplaces", object, {
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
  return { createTourPlace, loading, error };
}
