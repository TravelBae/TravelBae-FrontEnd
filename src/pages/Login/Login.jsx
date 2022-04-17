import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import login from "../../assets/img/login.svg";
import title from "../../assets/img/logo-title.svg";
import { useLocation, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useLogin from "../../hooks/useLogin";
import ReactLoading from "react-loading";

export default function Login(props) {
  const { state } = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { login: loginFunc, loading, error } = useLogin();

  if (state === null || state === undefined || state === "") {
    return <Navigate to="/roles" />;
  }

  const submitHandler = (data) => {
    const obj = {
      role_id: String(state),
      username: data.username,
      password: data.password,
    };
    loginFunc(obj);
  };

  return (
    <div className="flex">
      <img src={login} alt="login" className="h-screen" />
      <div className="flex flex-col ml-80">
        <img src={title} alt="logo" className="mt-8 mb-24 w-72" />
        <form className="w-96" onSubmit={handleSubmit(submitHandler)}>
          <Input
            name={"username"}
            text={"username"}
            inputClassName={"bg-blue-100"}
            register={register}
            required
            requiredMsg={"Username can't be empty"}
          />
          {errors.username?.type === "required" && (
            <span className="text-red-500 ml-1 text-sm">
              {errors.username?.message}
            </span>
          )}
          <Input
            name={"password"}
            text={"password"}
            type="password"
            inputClassName={"bg-blue-100"}
            register={register}
            required
            requiredMsg={"Password can't be empty"}
          />
          {errors.password?.type === "required" && (
            <span className="text-red-500 ml-1 text-sm">
              {errors.password?.message}
            </span>
          )}

          {error && (
            <p className="text-red-500 ml-1 text-sm">{error.message}</p>
          )}
          {!loading ? (
            <Button
              text={"Login"}
              className={"mt-24 bg-blue-600"}
              hoverColor={"hover:bg-blue-800"}
            />
          ) : (
            <ReactLoading
              type={"spokes"}
              color={"#A7C0FF"}
              height={50}
              width={50}
              className="mx-auto mt-10"
            />
          )}
        </form>
      </div>
    </div>
  );
}
