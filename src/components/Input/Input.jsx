import React from "react";

// Fungsi ini untuk membuat komponen input
// parameter yang ada didalamnya merupakan props yang bisa diturunkan kedalam komponen ini
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
  register,
  required,
  requiredMsg,
}) {
  return (
    <div className={`flex flex-col gap-1 mt-5 ${containerClassName}`}>
      <label htmlFor={name} className={`text-blue-600 pl-1 ${labelClassName}`}>
        {text}
      </label>
      {register && area && (
        <textarea
          id={name}
          type={type || "text"}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={` text-blue-600 p-2 rounded-md focus:outline-blue-700 ${inputClassName}`}
          rows="4"
          {...register(name, { required: requiredMsg })}
        />
      )}
      {register && !area && (
        <input
          id={name}
          type={type || "text"}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={` text-blue-600 p-2 rounded-md focus:outline-blue-700 ${inputClassName}`}
          {...register(name, { required: requiredMsg })}
        />
      )}
      {!register && !disabled && (
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
