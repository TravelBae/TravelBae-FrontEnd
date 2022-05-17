import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

// Fungsi ini untuk meng-consume API get all transaction report untuk owner dari backend
export default function useGetTransactionReport() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [transactionReport, setTransactionReport] = useState("");
  const [cookies, setCookies] = useCookies(["cookies"]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/owner/order", {
        headers: {
          Accept: `application/json`,
          Authorization: `Bearer ${cookies.token}`,
        },
      })
      .then((res) => {
        const convertTransactionReport = res.data.map((result) => {
          return {
            id: result.id,
            name: result.nama_customer,
            buyDate: result.tanggal_beli,
            totalPrice: result.total_bayar,
            totalTicket: result.total_tiket,
          };
        });
        setTransactionReport(convertTransactionReport);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.response.data);
      });
    setError("");
  }, []);

  return { transactionReport, loading, error };
}
