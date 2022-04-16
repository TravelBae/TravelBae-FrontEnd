import { useNavigate } from "react-router-dom";
import landing from "../../assets/img/landing.svg";
import logo from "../../assets/img/logo-title.svg";
import Button from "../../components/Button/Button";

export default function UserRole(props) {
  const navigate = useNavigate();
  let temp;

  return (
    <div className="lg:flex">
      <div className="hidden lg:flex flex-1 h-screen">
        <img src={landing} alt="role" className="h-screen object-cover" />
      </div>
      <div className="lg:w-1/2 xl:max-w-screen-sm">
        <div className="flex flex-col justify-center place-items-center">
          <div className="flex justify-center mx-10 mt-10">
            <img src={logo} alt="logo" className="mt-8 mb-24 w-72" />
          </div>
          <p className="text-4xl mb-16">Who are you? </p>
          <Button
            text={"Owner"}
            className={"w-96"}
            hoverColor={"hover:bg-blue-800"}
            onClick={() => {
              temp = 1;
              navigate("/login", { state: temp });
            }}
          />
          <Button
            text={"Admin"}
            className={
              "bg-white text-blue-600 transition-colors border border-blue-600 mt-4 w-96"
            }
            hoverColor={"hover:bg-blue-800 hover:text-white"}
            onClick={() => {
              temp = 2;
              navigate("/login", { state: temp });
            }}
          />
        </div>
      </div>
    </div>
  );
}
