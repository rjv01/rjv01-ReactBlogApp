import React from 'react'

export default function NewPost({postBody,setPostBody,postTitle,setPostTitle,handleSubmit,posts,setPosts}) {
  return (
    <div className='min-h-screen text-xl'>
      <form onSubmit={handleSubmit}
        className='flex flex-col justify-center items-center'
      >
        <label htmlFor="postTitle"
        className='text-2xl font-mono mt-3'>
          Title:</label>
        <input 
          type="text"
          required
          className='m-5 p-5 w-[400px] rounded-lg shadow-lg bg-white'
          value={postTitle}
          placeholder='Enter Title'
          onChange={(e)=> setPostTitle(e.target.value)}
        />
        <label htmlFor='postBody'
        className='text-2xl font-mono mt-3'>
          Body:</label>
        <textarea 
          type="text"
          required
          value={postBody}
          className='m-4 p-4 w-[400px] h-[200px] rounded-lg shadow-lg bg-white'
          placeholder='Enter Body'
          onChange={(e)=> setPostBody(e.target.value)}
        />
        <button
          className='w-[400px] rounded-lg m-5 p-4 text-2xl hover:bg-blue-700 shadow-lg  hover:text-white duration-300'
          type='submit'
        >
          Submit
        </button>
      </form>
    </div>
  )
}
