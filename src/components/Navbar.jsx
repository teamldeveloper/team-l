import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { images } from "../constants";

const navigationList = [
  { name: "home", href: "#home", current: true },
  { name: "featured app", href: "#featured_app", current: false },
  { name: "our team", href: "#our_team", current: false },
  { name: "contact us", href: "#contact_us", current: false },
];

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [navigation, setNavigation] = useState(navigationList);

  return (
    <nav className="border-2 border-solid border-black/10  py-2 px-2  ">
      <div className="md:w-3/4 md:mx-auto">
        <div className=" flex flex-wrap items-center justify-between">
          <div className="flex items-center ">
            <a href="#home" className="flex items-center">
              <img src={images.logo} alt="logo" className="h-10 mr-3" />
              <span className=" text-xl font-medium text-black/90">
                Team-L
              </span>
            </a>
          </div>

          <button
            className="md:hidden p-2 border-2 rounded-md"
            type="button"
            onClick={() => setIsNavbarOpen(!isNavbarOpen)}
          >
            {isNavbarOpen ? (
              <HiX className="h-6 w-6" aria-hidden="true" />
            ) : (
              <HiMenu className=" h-6 w-6" aria-hidden="true" />
            )}
          </button>

          <ul
            className={
              "flex flex-col items-center w-full mt-4 md:mt-0 md:space-x-6 md:flex-row md:flex md:w-auto " +
              (isNavbarOpen ? "flex " : "hidden")
            }
          >
            {navigation.map((item) => (
              <li key={item.name} className="w-full md:w-auto">
                <a
                  href={`${item.href}`}
                  className={`uppercase  block py-2  ${
                    item.current
                      ? " text-blue-700"
                      : "text-gray-700 hover:text-black"
                  }`}
                  onClick={() => {
                    const nav = navigation.slice();
                    nav.forEach((currentItem, index) => {
                      if (item.name === currentItem.name) {
                        nav[index].current = true;
                      } else {
                        nav[index].current = false;
                      }
                    });

                    setNavigation(nav);
                  }}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
