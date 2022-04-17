import { useNavigate } from "react-router-dom";
import login from "../../assets/img/login.svg";
import logo from "../../assets/img/logo-title.svg";
import Button from "../../components/Button/Button";

export default function UserRole(props) {
  const navigate = useNavigate();
  let temp;

  return (
    <div className="flex">
      <img src={login} alt="login" className="h-screen" />
      <div className="flex flex-col ml-80">
        <div className="flex justify-center mx-10 mt-10">
          <img src={logo} alt="logo" className="mt-8 mb-24 w-72" />
        </div>
        <p className="text-4xl mb-16">Who are you? </p>
        <Button
          text={"Owner"}
          className={"w-96"}
          hoverColor={"hover:bg-blue-800"}
          onClick={() => {
            temp = 2;
            navigate("/login", { state: temp });
          }}
        />
        <Button
          text={"Admin"}
          className={
            "bg-white text-blue-600 transition-colors border border-blue-600 mt-4"
          }
          hoverColor={"hover:bg-blue-800 hover:text-white"}
          onClick={() => {
            temp = 1;
            navigate("/login", { state: temp });
          }}
        />
      </div>
    </div>
  );
}
