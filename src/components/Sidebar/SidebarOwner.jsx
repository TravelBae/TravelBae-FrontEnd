import React from "react";
import logo from "../../assets/img/Logo.svg";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
import useLogout from "../../hooks/useLogout";

export default function SidebarOwner() {
  const { logout, loading, error } = useLogout();

  return (
    <div className="bg-white pt-8 flex flex-col px-5 h-full">
      <NavLink to="/" className="flex flex-col mb-16">
        <img src={logo} alt="logo" />
      </NavLink>
      <ul className="space-y-7 flex flex-col justify-center">
        <li>
          <NavLink
            to="/"
            className={(param) =>
              param.isActive
                ? "inline-flex justify-center items-center px-2 py-1 rounded-md text-blue-600 font-semibold"
                : "inline-flex justify-center items-center px-2 py-1 rounded-md text-neutral-400 hover:text-blue-600"
            }
          >
            <Icon icon="tabler:smart-home" className="mr-1" />
            <p>Homepage</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/report"
            className={(param) =>
              param.isActive
                ? "inline-flex justify-center items-center px-2 py-1 rounded-md text-blue-600 font-semibold"
                : "inline-flex justify-center items-center px-2 py-1 rounded-md text-neutral-400 hover:text-blue-600"
            }
          >
            <Icon icon="tabler:report-money" className="mr-1" />
            <p>Report</p>
          </NavLink>
        </li>
        <li>
          <div className="xl:mt-60 2xl:mt-96"></div>
        </li>
        <li>
          <button
            className="inline-flex justify-center items-center px-2 py-1 rounded-md text-neutral-400 hover:text-blue-600"
            onClick={() => {
              logout();
            }}
          >
            <Icon icon="tabler:logout" className="mr-1" />
            <p>Logout</p>
          </button>
        </li>
      </ul>
    </div>
  );
}
