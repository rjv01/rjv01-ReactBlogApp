import React from 'react'
import { useParams,Link } from 'react-router-dom'

export default function PostPage({posts,handleDelete}) {
  const {id} = useParams();
  const post = posts.find(post=> (post.id).toString() === id);
  return (
    <div>
      {post && 
        <div className='min-h-screen border flex flex-col justify-start items-center'>
          <h2 className='text-xl font-serif'>{post.title}</h2>
          <div className='flex justify-center items-center'>
            <p className='text-xl font-serif underline'>{post.datetime}</p>
          </div>
          <p className='shadow-lg w-full  capitalize m-4 p-3 text-xl font-serif flex justify-start items-center'>{post.body}</p>
          <button
            className='m-4 p-4 text-2xl font-mono hover:font-bold hover:text-white shadow-lg rounded-xl hover:bg-red-500 duration-200 cursor-pointer'
            onClick={()=> handleDelete(post.id)}
          >
            Delete Post
          </button>
        </div>
      }
      {!post && 
        <div>
          <p>Post Not Found</p>
          <p>
            <Link to='/'>Visit Our HomePage</Link>
          </p>
        </div>
      }
    </div>
  )
}
