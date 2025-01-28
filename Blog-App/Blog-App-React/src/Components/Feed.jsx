import React from 'react';
import Post from './Post';


export default function Feed({posts}) {
  return (
    <div className=''>
        <ul className='grid grid-cols-2'>
            {posts.map((post)=>(
              <Post key={post.id} post={post}/>
            ))}
          </ul>
    </div>
  )
}
