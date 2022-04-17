import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export default function useGetTourPlace() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [tourPlace, setTourPlace] = useState("");
  const [cookies, setCookies] = useCookies(["cookies"]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/tourplaces", {
        headers: {
          Accept: `application/json`,
          Authorization: `Bearer ${cookies.token}`,
        },
      })
      .then((res) => {
        const convertTourPlace = res.data.map((result) => {
          return {
            id: result.id,
            name: result.nama_tempat,
            photo: result.img_tempat,
            openingHours: result.jam_buka,
            address: result.alamat,
            type: result.tipe,
            description: result.deskripsi,
            ticketStock: result.stok_tiket,
          };
        });
        setTourPlace(convertTourPlace);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.response.data);
      });
    setError("");
  }, []);

  return { tourPlace, loading, error };
}
