import axios from 'axios';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

// Fungsi ini untuk meng-consume API get all event untuk admin dari backend
export default function useGetEvent() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [event, setEvent] = useState('');
  const [cookies, setCookies] = useCookies(['cookies']);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/event', {
        headers: {
          Accept: `application/json`,
          Authorization: `Bearer ${cookies.token}`,
        },
      })
      .then((res) => {
        const convertEvent = res.data
          .filter((value) => {
            if (value.id !== 1) {
              return value;
            }
            return;
          })
          .map((result) => {
            return {
              id: result.id,
              name: result.nama_event,
              photo: result.img_tempat,
              openingHours: result.jam_mulai,
              address: result.alamat,
              type: result.tipe,
              regulation: result.regulasi,
              ticketStock: result.stok,
            };
          });
        setEvent(convertEvent);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.response.data);
      });
    setError('');
  }, []);

  return { event, loading, error };
}
