import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PublicRoute() {
  const role = useSelector((state) => state.user.data.role_id);
  const isLogin = useSelector((state) => state.user.data.isLogin);
  console.log(role, "role_id");
  console.log(isLogin, "islogin");

  if (isLogin && role === "1") {
    return <Navigate to="/tourplace" />;
  } else if (isLogin && role === "2") {
    return <Navigate to="/" />;
  } else {
    return <Outlet />;
  }
}

export default PublicRoute;
