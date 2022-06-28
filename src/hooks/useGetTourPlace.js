import axios from 'axios';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

// Fungsi ini untuk meng-consume API get all tour place untuk admin dari backend
export default function useGetTourPlace() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [tourPlace, setTourPlace] = useState('');
  const [cookies, setCookies] = useCookies(['cookies']);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/tourplaces', {
        headers: {
          Accept: `application/json`,
          Authorization: `Bearer ${cookies.token}`,
        },
      })
      .then((res) => {
        const convertTourPlace = res.data
          .filter((value) => {
            if (value.id !== 1) {
              return value;
            }
            return;
          })
          .map((result) => {
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
    setError('');
  }, []);

  return { tourPlace, loading, error };
}
