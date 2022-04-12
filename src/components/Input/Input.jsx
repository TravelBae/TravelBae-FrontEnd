import React from "react";

export default function Input({
  name,
  text,
  type,
  value,
  onChange,
  disabled = false,
  containerClassName,
  labelClassName,
  inputClassName,
  area = false,
}) {
  return (
    <div className={`flex flex-col gap-1 mt-5 ${containerClassName}`}>
      <label htmlFor={name} className={`text-blue-600 pl-1 ${labelClassName}`}>
        {text}
      </label>
      {area ? (
        <textarea
          id={name}
          type={type || "text"}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={` text-blue-600 p-2 rounded-md focus:outline-blue-700 ${inputClassName}`}
          rows="4"
        ></textarea>
      ) : (
        <input
          id={name}
          type={type || "text"}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={` text-blue-600 p-2 rounded-md focus:outline-blue-700 ${inputClassName}`}
        />
      )}
    </div>
  );
}
