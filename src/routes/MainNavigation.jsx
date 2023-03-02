import React from "react";
import { Link, Outlet } from "react-router-dom";

function MainNavigation() {
  return (
    <>
      <header className="fixed top-0 left-2/4 translate-x-[-50%] w-full max-w-screen-xl h-16 bg-slate-800">
        <nav className="w-full h-full">
          <ul className="w-full h-full flex flex-row gap-8 justify-center items-center">
            <li>
              <Link to={"/"}>خانه</Link>
            </li>
            <li>
              <Link to={"/posts"}>پست ها</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default MainNavigation;
