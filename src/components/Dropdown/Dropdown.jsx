import { useState } from "react";
import down from "../../assets/icon/down.svg";
import DropdownList from "./DropdownList";

export default function Dropdown({
  text,
  name,
  onChange,
  value,
  list,
  containerClassName,
  labelClassName,
  listClassName,
}) {
  const [showList, setShowList] = useState(false);

  function changeHandler(data) {
    onChange(data);
    setShowList(false);
  }

  return (
    <div className={`flex flex-col ${containerClassName}`}>
      <label
        className={`text-blue-600 pl-1 pb-1 ${labelClassName}`}
        htmlFor={name}
      >
        {text}
      </label>
      <div
        onClick={() => setShowList((prev) => !prev)}
        className={`bg-white p-[.6rem] rounded-md flex justify-between text-blue-600 mb-[.1rem]  ${
          showList && `outline outline-2 outline-blue-700`
        }`}
      >
        <p>{value.text}</p>
        <img src={down} alt="down" />
      </div>
      {showList && (
        <ul className="rounded border transition-all">
          {list.map((li) => (
            <DropdownList
              className={listClassName}
              key={li.val}
              data={li}
              onClick={changeHandler}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
