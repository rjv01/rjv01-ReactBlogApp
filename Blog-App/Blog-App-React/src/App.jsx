import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Home from './Components/Home';
import Footer from './Components/Footer';
import NewPost from './Components/NewPost';
import PostPage from './Components/PostPage';
import Missing from './Components/Missing';
import {format} from 'date-fns';

function App() {
  const [posts, setPosts] = useState(() => {
    return JSON.parse(localStorage.getItem('blog')) || [
      {
        id: 1,
        title: "My First Post",
        datetime: "July 01, 2021 11:17:36 AM",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
      },
      {
        id: 2,
        title: "My 2nd Post",
        datetime: "July 01, 2021 11:17:36 AM",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
      },
      {
        id: 3,
        title: "My 3rd Post",
        datetime: "July 01, 2021 11:17:36 AM",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
      },
      {
        id: 4,
        title: "My Fourth Post",
        datetime: "July 01, 2021 11:17:36 AM",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
      }
    ];
  });

  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle,setPostTitle] = useState('');
  const [postBody,setPostBody] = useState('');


  useEffect(()=>{
    const filteredResults = posts.filter((post)=>
    ((post.body).toLowerCase()).includes(search.toLowerCase()) 
    || ((post.title).toLowerCase()).includes(search.toLowerCase()));

     setSearchResults(filteredResults.reverse());
  },[posts,search]);

  useEffect(()=>{
    localStorage.setItem("blog",JSON.stringify(posts))
  },[posts]);

  return (
    <div className='flex flex-col min-h-screen bgColor'>
      <Router>
        <Header title="React JS blog" />
        <Navbar search={search} setSearch={setSearch} />

        <Routes>
          <Route
            exact
            path="/"
            element={<Home posts={searchResults} />}
          />
          <Route
            exact
            path="/post"
            element={
              <NewPostWrapper 
                postBody={postBody}
                setPostBody={setPostBody}
                postTitle={postTitle}
                setPostTitle={setPostTitle}
                posts={posts}
                setPosts={setPosts}
              />
            }
          />
          <Route
            path="/post/:id"
            element={
              <PostPageWrapper
                posts={posts}
                setPosts={setPosts}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

function PostPageWrapper({ posts, setPosts }) {
  const navigate = useNavigate();

  function handleDelete(id) {
    const postList = posts.filter((post) => post.id !== id);
    setPosts(postList);
    localStorage.setItem('blog',JSON.stringify(postList));
    navigate('/');
  }

  return <PostPage posts={posts} handleDelete={handleDelete} />;
}

function NewPostWrapper({postBody,setPostBody,postTitle,setPostTitle,posts,setPosts}){
  const navigate = useNavigate();

  function handleSubmit(e){
    e.preventDefault();
    if (postTitle.trim() === '' || postBody.trim() === '') {
      alert('Both Title and Body fields must not be blank.');
      return;
    }
    const id = posts.length ? posts[posts.length - 1].id+1 : 1;
    const datetime = format(new Date(),'MMMM dd,yyyy pp');
    
    const newPost = {id,title:postTitle,datetime,body:postBody};
    const allpost = [...posts,newPost];
    // console.log(allpost);
    setPosts(allpost);
    setPostTitle('');
    setPostBody('');
    localStorage.setItem('blog',JSON.stringify(allpost));
    navigate('/');
  }

  return <NewPost 
          postBody={postBody} 
          setPostBody={setPostBody} 
          postTitle={postTitle} 
          setPostTitle={setPostTitle} 
          handleSubmit={handleSubmit}
          posts={posts}
          setPosts={setPosts}
          />
}

export default App;