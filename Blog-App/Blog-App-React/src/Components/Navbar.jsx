import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';

export default function Navbar({ search, setSearch }) {
  return (
    <div className="border-b-2 flex items-center w-full px-4 py-4">
      <div className="flex flex-1">
        <Link to="/">
          <img
            src={Logo}
            alt="Img"
            className="w-20 h-auto rounded-full hover:bg-blue-500 duration-200"
          />
        </Link>
      </div>
      <div className="flex flex-2">
        <h1 className='text-4xl m-2 p-4'>React JS blog</h1>
      </div>

      <div className="flex flex-1 justify-center pr-22 ">
        <form onSubmit={(e) => e.preventDefault()} className="flex items-center">
          <label htmlFor="search" className="sr-only">
            Search Post
          </label>
          <input
            type="text"
            id="search"
            value={search}
            placeholder="Search Post"
            onChange={(e) => setSearch(e.target.value)}
            className="border text-xl rounded-lg px-3 py-2 w-[480px] h-[50px]"
          />
        </form>
      </div>

      <div className="flex flex-1 justify-end items-center gap-3">
        <ul className="flex gap-3">
          <li className="p-3 rounded-lg hover:bg-blue-700 shadow-2xl duration-300 hover:text-white font-semibold text-xl font-sans">
            <Link to="/">Home</Link>
          </li>
          <li className="p-3 rounded-lg hover:bg-blue-700 shadow-2xl duration-300 hover:text-white font-semibold text-xl font-sans">
            <Link to="/post">Post</Link>
          </li>
          <li className="p-3 rounded-lg hover:bg-blue-700 shadow-2xl duration-300 hover:text-white font-semibold text-xl font-sans">
            <Link to="/about">About</Link>
          </li>
        </ul>

        <div className="dropdown pr-4">
          <div tabIndex={0} role="button" className="btn m-1">
            Theme
            <svg
              width="12px"
              height="12px"
              className="inline-block h-2 w-2 fill-current opacity-60"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2048 2048"
            >
              <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl"
          >
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Default"
                value="default"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Retro"
                value="retro"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Cyberpunk"
                value="cyberpunk"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Valentine"
                value="valentine"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Aqua"
                value="aqua"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
