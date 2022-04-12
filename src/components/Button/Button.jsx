import React from "react";
import { Icon } from "@iconify/react";

export default function Button({
  text,
  className,
  onClick,
  iconName,
  iconClassName,
  iconColor,
  hoverColor,
  disabled = false,
}) {
  return (
    <button
      className={`w-full px-4 py-3 block bg-blue-600 ${hoverColor} text-white text-lg transition-colors rounded-md ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      <Icon icon={iconName} color={iconColor} className={iconClassName} />
      {text}
    </button>
  );
}
