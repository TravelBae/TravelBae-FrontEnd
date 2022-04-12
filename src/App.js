import "./App.css";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import NotAllowed from "./pages/NotAllowed/NotAllowed";
import UserRole from "./pages/UserRole/UserRole";
import InputData from "./pages/Admin/InputData";
import TourPlace from "./pages/Admin/TourPlace";
import Order from "./pages/Admin/Order";
import Event from "./pages/Admin/Event";
import UpdateData from "./pages/Admin/UpdateData";
import ReportOwner from "./pages/Owner/ReportOwner";
import HomeOwner from "./pages/Owner/HomeOwner";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomeOwner />} />
        <Route path="/report" element={<ReportOwner />} />
        <Route path="/tourplace" element={<TourPlace />} />
        <Route path="/event" element={<Event />} />
        <Route path="/order" element={<Order />} />
        <Route path="/input" element={<InputData />} />
        <Route path="/update" element={<UpdateData />} />
        <Route path="/roles" element={<UserRole />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/not-allowed" element={<NotAllowed />} />
      </Routes>
    </>
  );
}

export default App;
