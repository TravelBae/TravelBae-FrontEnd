import error from "../../assets/img/error.png";
import Button from "../../components/Button/Button";

export default function NotAllowed() {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={error} alt="not-found" className="w-96 mt-16" />
      <p className="mt-10 text-3xl">You don't have access :(</p>
      <Button
        text={"Back to Home"}
        className={"w-96 mt-6"}
        hoverColor={"hover:bg-blue-800"}
      />
    </div>
  );
}
