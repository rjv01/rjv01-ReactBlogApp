import React from 'react'

export default function Header({title}) {
  return (
    <div className='flex justify-center items-center p-6 text-5xl font-sans font-semibold text-blue-700 w-full'>
        {title}
    </div>
  )
}
