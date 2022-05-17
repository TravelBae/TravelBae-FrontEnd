import "./App.css";
import { useState, useEffect } from "react";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import NotAllowed from "./pages/NotAllowed/NotAllowed";
import UserRole from "./pages/UserRole/UserRole";
import InputData from "./pages/Admin/InputData";
import TourPlace from "./pages/Admin/TourPlace";
import Order from "./pages/Admin/Order";
import Event from "./pages/Admin/Event";
import UpdateDataTourPlace from "./pages/Admin/UpdateDataTourPlace";
import ReportOwner from "./pages/Owner/ReportOwner";
import HomeOwner from "./pages/Owner/HomeOwner";
import { Routes, Route } from "react-router-dom";
import PrivateRouteAdmin from "./components/PrivateRoute/PrivateRouteAdmin";
import PrivateRouteOwner from "./components/PrivateRoute/PrivateRouteOwner";
import PublicRoute from "./components/PrivateRoute/PublicRoute";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setData } from "./components/store/userSlice";
import ReactLoading from "react-loading";
import UpdateDataEvent from "./pages/Admin/UpdateDataEvent";

//fungsi ini ada root yang akan memanggil semua halaman yang telah dibuat
function App() {
  const [cookies, setCookies] = useCookies(["token"]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    if (cookies.token !== null) {
      const instance = axios.create({
        baseURL: "http://127.0.0.1:8000/api/check-token",
        headers: { Authorization: `Bearer ${cookies.token}` },
      });
      instance
        .get()
        .then((res) => {
          dispatch(
            setData({
              role_id: res.data.role_id,
              username: res.data.username,
              isLogin: true,
            })
          );
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
        });
    }
  }, []);

  if (loading) {
    return (
      <ReactLoading
        type={"spinningBubbles"}
        color={"#A7C0FF"}
        height={175}
        width={175}
        className="mx-auto mt-32"
      />
    );
  }
  return (
    <>
      <Routes>
        <Route path="/login" element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/roles" element={<PublicRoute />}>
          <Route path="/roles" element={<UserRole />} />
        </Route>
        <Route path="/" element={<PrivateRouteOwner />}>
          <Route path="/" element={<HomeOwner />} />
        </Route>
        <Route path="/report" element={<PrivateRouteOwner />}>
          <Route path="/report" element={<ReportOwner />} />
        </Route>
        <Route path="/tourplace" element={<PrivateRouteAdmin />}>
          <Route path="/tourplace" element={<TourPlace />} />
        </Route>
        <Route path="/event" element={<PrivateRouteAdmin />}>
          <Route path="/event" element={<Event />} />
        </Route>
        <Route path="/order" element={<PrivateRouteAdmin />}>
          <Route path="/order" element={<Order />} />
        </Route>
        <Route path="/input" element={<PrivateRouteAdmin />}>
          <Route path="/input" element={<InputData />} />
        </Route>
        <Route path="/update-tour-place/:id" element={<PrivateRouteAdmin />}>
          <Route path="/update-tour-place/:id" element={<UpdateDataTourPlace />} />
        </Route>
        <Route path="/update-event/:id" element={<PrivateRouteAdmin />}>
          <Route path="/update-event/:id" element={<UpdateDataEvent />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/not-allowed" element={<NotAllowed />} />
      </Routes>
    </>
  );
}

export default App;
