import React from "react";

export default function DropdownList({ onClick, data, className }) {
  return (
    <li
      onClick={() => onClick(data)}
      className={`p-2 border-b bg-white text-blue-600 transition-colors hover:bg-blue-100 text-sm ${className}`}
    >
      {data.text}
    </li>
  );
}
