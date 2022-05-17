import React from "react";

// Fungsi ini untuk membuat isi list yang berada pada komponen dropdown
// parameter yang ada didalamnya merupakan props yang bisa diturunkan kedalam komponen ini
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
