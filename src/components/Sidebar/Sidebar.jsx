import React from "react";
import logo from "../../assets/img/Logo.svg";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="bg-white pt-8 flex flex-col px-5 h-full">
      <NavLink to="/" className="flex flex-col mb-16">
        <img src={logo} alt="logo" />
      </NavLink>
      <ul className="space-y-7 flex flex-col justify-center">
        <li>
          <NavLink
            to="/tourplace"
            className={(param) =>
              param.isActive
                ? "inline-flex justify-center items-center px-2 py-1 rounded-md text-blue-600 font-semibold"
                : "inline-flex justify-center items-center px-2 py-1 rounded-md text-neutral-400 hover:text-blue-600"
            }
          >
            <Icon icon="tabler:smart-home" className="mr-1" />
            <p>Tour Place</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/event"
            className={(param) =>
              param.isActive
                ? "inline-flex justify-center items-center px-2 py-1 rounded-md text-blue-600 font-semibold"
                : "inline-flex justify-center items-center px-2 py-1 rounded-md text-neutral-400 hover:text-blue-600"
            }
          >
            <Icon icon="tabler:calendar-event" className="mr-1" />
            <p>Event</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/input"
            className={(param) =>
              param.isActive
                ? "inline-flex justify-center items-center px-2 py-1 rounded-md text-blue-600 font-semibold"
                : "inline-flex justify-center items-center px-2 py-1 rounded-md text-neutral-400 hover:text-blue-600"
            }
          >
            <Icon icon="tabler:folder-plus" className="mr-1" />
            <p>Input</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/order"
            className={(param) =>
              param.isActive
                ? "inline-flex justify-center items-center px-2 py-1 rounded-md text-blue-600 font-semibold"
                : "inline-flex justify-center items-center px-2 py-1 rounded-md text-neutral-400 hover:text-blue-600"
            }
          >
            <Icon icon="tabler:clipboard-list" className="mr-1" />
            <p>Order</p>
          </NavLink>
        </li>
        <li>
          <div className="xl:mt-60 2xl:mt-96"></div>
        </li>
        <li>
          <button className="inline-flex justify-center items-center px-2 py-1 rounded-md text-neutral-400 hover:text-blue-600">
            <Icon icon="tabler:logout" className="mr-1" />
            <p>Logout</p>
          </button>
        </li>
      </ul>
    </div>
  );
}
