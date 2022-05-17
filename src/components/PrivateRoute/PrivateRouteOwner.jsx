import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// Fungsi ini untuk membuat private route owner
function PrivateRouteOwner() {
  const role = useSelector((state) => state.user.data.role_id);
  const isLogin = useSelector((state) => state.user.data.isLogin);
  console.log(role, "role_id");
  console.log(isLogin, "islogin");

  if (!isLogin) {
    return <Navigate to="/roles" />;
  } else if (isLogin && role === "1") {
    return <Navigate to="/not-allowed" />;
  } else {
    return <Outlet />;
  }
}

export default PrivateRouteOwner;
