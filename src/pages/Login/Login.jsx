import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import landing from "../../assets/img/landing.svg";
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
    <div className="lg:flex">
      <div className="hidden lg:flex flex-1 h-screen">
        <img className="h-screen object-cover" src={landing} alt="login" />
      </div>
      <div className="lg:w-1/2 xl:max-w-screen-sm">
        <div className="flex flex-col justify-center place-items-center">
          <div className="flex mt-10">
            <img src={title} alt="logo" className="mt-8 mb-24 w-72" />
          </div>
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
    </div>
  );
}
