import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
  const today = new Date();
  return (
    <div className='bg-blue-700 flex flex-col text-black justify-center items-center text-xl font-mono rounded'>
      <p className='mt-3'>Team Blue Bird Learning ReactJS</p>
      <p>Copyright &copy; {today.getFullYear()}</p>
      <div className='flex gap-3'>
        <Link className='hover:text-white text-3xl my-3 duration-200' to='https://www.linkedin.com/in/raj-shekhar-verma-2a292a231/'>Linkedin</Link>
        <Link className='hover:text-white text-3xl my-3 duration-200' to='https://github.com/rjv01'>GitHub</Link>
      </div>
    </div>
  )
}
