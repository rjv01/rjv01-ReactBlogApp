import React,{useEffect} from 'react'
import { useParams,Link } from 'react-router-dom';


export default function EditPost({posts,handleEdit,editTitle,setEditTitle,editBody,setEditBody}) {
    const {id} = useParams();
    const post = posts.find(post => (post.id).toString() === id);
    useEffect(()=>{
        if(post){
            setEditTitle(post.title);
            setEditBody(post.body);
        }
    },[post,setEditBody,setEditTitle]);

    return (
    <div className='min-h-screen text-xl'>
        {editTitle && 
        <>  
            <h2>Edit Post</h2>
            <form onSubmit={(e)=> e.preventDefault()}
                className='flex flex-col justify-center items-center'
            >
                <label htmlFor="postTitle"
                className='text-2xl font-mono mt-3'>
                Title:</label>
                <input 
                type="text"
                required
                className='m-5 p-5 w-[400px] rounded-lg shadow-lg bg-white'
                value={editTitle}
                placeholder='Enter Title'
                onChange={(e)=> setEditTitle(e.target.value)}
                />
                <label htmlFor='postBody'
                className='text-2xl font-mono mt-3'>
                Body:</label>
                <textarea 
                type="text"
                required
                value={editBody}
                className='m-4 p-4 w-[400px] h-[200px] rounded-lg shadow-lg bg-white'
                placeholder='Enter Body'
                onChange={(e)=> setEditBody(e.target.value)}
                />
                <button
                onClick={()=> handleEdit(post.id)}
                className='w-[400px] rounded-lg m-5 p-4 text-2xl hover:bg-blue-700 shadow-lg  hover:text-white duration-300'
                type='submit'
                >
                Submit
                </button>
            </form>
        </>
        }
        {!editTitle && 
            <div>
                <h1>No Post Found</h1>
                <p>
                    <Link to='/' >Visit our HomePage</Link>
                </p>
            </div>
        }
    </div>
    )
}
