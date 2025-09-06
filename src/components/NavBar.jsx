import { useState } from "react";
import logo from "../assets/logo.png";
import { SearchBar } from "./SearchBar";

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  const handleInput = () => {
    setOpen((prev) => !prev);
  };

  return (
    <section>
      <div className="navbar bg-[#2C5364] shadow-sm text-white flex justify-between px-10">
        <div className="navbar-center flex items-center justify-center">
          <img src={logo} alt="" className="h-[50px] w-auto" />
          <h1 className=" text-3xl font-bold text-white">
            Movi<span className=" text-[#E50914]">X</span>
          </h1>
        </div>
        {isOpen && <SearchBar />}
        <div className="">
          <button onClick={handleInput} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />{" "}
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export { NavBar };
