import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav className="w-screen h-14 bg-[#333333] text-2xl">
        <ol className="flex justify-evenly items-center h-full">
          <li className="flex justify-center items-center gap-2">
            <img src="/to-do-list.png" alt="png" width={30} />
            <a href="/">iTask</a>
          </li>
          <li className="text-[#E6F7FF] hover:text-[#00BFFF] flex justify-center items-center gap-1">
            <lord-icon
              src="https://cdn.lordicon.com/lllcnxva.json"
              trigger="in"
              delay="1500"
              state="in-reveal"
              style={{ width: 40, height: 40 }}
            ></lord-icon>
            <a target="_blank" href="https://github.com/MaheshJV9130/keynest">
              GitHub
            </a>
          </li>
        </ol>
      </nav>
    </header>
  );
};

export default Navbar;
