import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';

export default function Navbar({ search, setSearch }) {
  return (
    <div className="border border-white flex items-center w-full px-4 py-2">
      <div className="flex flex-1">
        <Link to="/"><img src={Logo} alt="Img" className='w-24 h-auto rounded-full hover:bg-blue-500 duration-200'/></Link>
      </div>


      <div className="flex flex-1 justify-center">
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
            className="bg-white text-xl rounded-lg px-3 py-2 w-[480px] h-[50px]"
          />
        </form>
      </div>

      <div className="flex flex-1 justify-end">
        <ul className="flex gap-3">
          <li className=" p-3 rounded-lg hover:bg-blue-700 shadow-2xl duration-300 hover:text-white font-semibold text-xl font-sans">
            <Link to="/">Home</Link>
          </li>
          <li className=" p-3 rounded-lg hover:bg-blue-700 shadow-2xl duration-300 hover:text-white font-semibold text-xl font-sans">
            <Link to="/post">Post</Link>
          </li>
          <li className=" p-3 rounded-lg hover:bg-blue-700 shadow-2xl duration-300 hover:text-white font-semibold text-xl font-sans">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
