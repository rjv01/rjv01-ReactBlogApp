import React from 'react'
import { Link } from 'react-router-dom'

export default function Post({post}) {
  return (
    <div className='border border-white m-3 p-3 w-[320px] shadow-2xl rounded-2xl text-xl gap-3 h-[130px]'>
        <Link to={`/post/${post.id}`} >
            <h2 className='hover:underline hover:text-2xl duration-200'>{post.title}</h2>
            <p className='text-lg'>{post.datetime}</p>
        </Link>
        <p>{
            (post.body).length <= 25 ? 
                (post.body) 
                : `${(post.body).slice(0,25)}...`    
        }</p>
    </div>
  )
}
