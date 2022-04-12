import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import login from "../../assets/img/login.svg";
import title from "../../assets/img/logo-title.svg";
import { useNavigate, useLocation } from "react-router-dom";

export default function Login(props) {
  const navigate = useNavigate();
  const { state } = useLocation();

  const navigateRoles = () => {
    if (state === 1) {
      navigate("/");
    } else if (state === 2) {
      navigate("/tourplace");
    }
  };
  return (
    <div className="flex">
      <img src={login} alt="login" className="h-screen" />
      <div className="flex flex-col ml-80">
        <img src={title} alt="logo" className="mt-8 mb-24 w-72" />
        <form className="w-96">
          <Input
            name={"username"}
            text={"username"}
            inputClassName={"bg-blue-100"}
          />
          <Input
            name={"password"}
            text={"password"}
            type="password"
            inputClassName={"bg-blue-100"}
          />
          <Button
            text={"Login"}
            className={"mt-24"}
            hoverColor={"bg-blue-800"}
            onClick={() => {
              navigateRoles();
            }}
          />
        </form>
      </div>
    </div>
  );
}
