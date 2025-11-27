import { Link, NavLink, useLocation } from "react-router";
import VehicleDropdown from "./VehicleDropdown";
import { useState } from "react";
import { ChevronDown, House } from "lucide-react";

function Header() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  return (
    <header className="shadow bg-white top-0 sticky z-50">
      <nav className="border-gray-200 px-4 lg:px-6 py-3">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-7-xl">
          <Link to="/">
            <h2 className="font-semibold text-2xl leading-10">
              <span className="text-orange-700">Vehicle </span>
              Management System
            </h2>
          </Link>
          <div className="flex gap-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-orange-700" : "text-gray-700"
                } text-xl flex flex-row gap-1.5 items-center hover:text-orange-700 rounded-lg`
              }
            >
              <House />
              Home
            </NavLink>
            <div
              className="relative group"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <button
                onClick={() => setOpen((o) => !o)} // toggle for mobile + desktop click
                className={`py-3 px-4 duration-200
                group-hover:text-white group-hover:bg-orange-700 
                ${
                  open
                    ? "text-white bg-orange-700 group-hover:bg-orange-700 group-hover:text-white"
                    : `group-hover:bg-white ${
                        location.pathname.startsWith("/vehiclecreate")
                          ? "hover:text-orange-700"
                          : "hover:text-gray-700"
                      }`
                } 
                ${
                  location.pathname.startsWith("/vehiclecreate")
                    ? "text-orange-700"
                    : "text-gray-700"
                }
                text-xl flex-row flex items-center gap-1 justify-center rounded-t-lg
              `}
              >
                Add Vehicle
                <ChevronDown
                  className={`duration-200 ${
                    open ? "rotate-180" : "rotate-0 group-hover:rotate-180"
                  }`}
                />
              </button>

              <div
                className={`absolute w-full pb-2 top-full left-1/2 -translate-x-1/2 bg-orange-700 
                rounded-b-lg transition-all ease-in-out duration-200
                ${
                  open
                    ? "pointer-events-auto opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-5 pointer-events-none"
                }
              `}
              >
                <VehicleDropdown />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
