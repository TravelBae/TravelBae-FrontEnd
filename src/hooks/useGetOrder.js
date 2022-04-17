import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export default function useGetOrder() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [order, setOrder] = useState("");
  const [cookies, setCookies] = useCookies(["cookies"]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/admin/order", {
        headers: {
          Accept: `application/json`,
          Authorization: `Bearer ${cookies.token}`,
        },
      })
      .then((res) => {
        const convertOrder = res.data.map((result) => {
          return {
            id: result.id,
            name: result.nama_customer,
            buyDate: result.tanggal_beli,
            totalPrice: result.total_bayar,
            totalTicket: result.total_tiket,
            orderStatus: result.order_status,
          };
        });
        setOrder(convertOrder);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.response.data);
      });
    setError("");
  }, []);

  return { order, loading, error };
}
