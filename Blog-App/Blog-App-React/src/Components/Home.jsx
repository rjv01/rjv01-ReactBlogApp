import React from 'react'
import Feed from './Feed.jsx'


export default function Home({posts}) {
  return (
    <div className='min-h-screen flex flex-col justify-start items-center '>
        <h1 className='text-3xl text-white font-bold font-mono'>Home Page</h1>
        <div className='flex justify-center items-center'>
          {posts.length? (
            <Feed posts={posts}/>
          ):(
            <p className='text-red-600 text-3xl font-mono m-5 p-5'>No post to display</p>
          )}
        </div>
    </div>
  )
}
