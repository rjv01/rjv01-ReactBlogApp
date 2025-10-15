import React from 'react'
import { Link } from 'react-router-dom'

export default function Post({post}) {
  return (
    <div className='border m-4 p-2 card bg-base-100 w-96 shadow-sm'>
            <div className='card-body'>
              <h2 
              className='card-title'>
              {
                (post.title).length <= 15 ? 
                (post.title) : `${(post.title).slice(0,15)}...`
              }
              </h2>
            <p className='text-sm font-bold'>{post.datetime}</p>
        <p
          className='capitalize'
        >{
            (post.body).length <= 25 ? 
                (post.body) 
                : `${(post.body).slice(0,25)}...`    
        }</p>
            </div>
        <div className='card-actions justify-end flex items-center'>
          <Link to={`/post/${post.id}`} >
                <button
                  className='btn btn-primary m-4 p- hover:text-white duration-300 rounded-xl cursor-pointer'
                >Read More</button>
          </Link>
        </div>
    </div>
  )
}

//old
// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function Post({post}) {
//   return (
//     <div className='border border-white m-5 p-5 w-[320px] shadow-2xl rounded-2xl text-xl h-[230px]'>
//             <h2 
//               className='hover:underline duration-200 capitalize font-mono text-orange-500'>
//               {
//                 (post.title).length <= 15 ? 
//                 (post.title) : `${(post.title).slice(0,15)}...`
//               }
//               </h2>
//             <p className='text-sm font-bold'>{post.datetime}</p>
//         <p
//           className='capitalize'
//         >{
//             (post.body).length <= 25 ? 
//                 (post.body) 
//                 : `${(post.body).slice(0,25)}...`    
//         }</p>
//         <div className='flex justify-center items-center'>
//           <Link to={`/post/${post.id}`} >
//                 <button
//                   className='m-4 p-4 text-red-600 hover:bg-red-600 hover:text-white duration-300 rounded-xl cursor-pointer'
//                 >Read More</button>
//           </Link>
//         </div>
//     </div>
//   )
// }
