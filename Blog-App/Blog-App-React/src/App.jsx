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
import api from './api/posts';
import EditPost from './Components/EditPost';

import {format} from 'date-fns';

function App() {
  //localstorage
  const [posts, setPosts] = useState(() => {
    return JSON.parse(localStorage.getItem('blog')) || [
      {
        id: 1,
        title: "My First Post",
        datetime: "Jan 01, 2025 11:17:36 AM",
        body: "Move on ma"
      },
      {
        id: 2,
        title: "My 2nd Post",
        datetime: "Jan 01, 2025 11:17:36 AM",
        body: "2x Offer milega?"
      },
      {
        id: 3,
        title: "Life: A Journey Worth Embracing",
        datetime: "Jan 01, 2025 11:17:36 AM",
        body: "Life is a journey, a mosaic of experiences, challenges, and moments that shape who we are. It is not merely about existing but about truly living—finding meaning, embracing growth, and cherishing every fleeting moment The Beauty of Simplicity Amid the chaos of modern living life often reveals its beauty in the simplest of moments—a quiet sunrise, the laughter of a child, or a heartfelt conversation with a friend. These instances remind us that joy often lies in the ordinary, waiting to be discovered. Connections That Matter Human connections are the essence of life. Building relationships filled with love, trust, and understanding enriches our journey. Whether it's family, friends, or a kind stranger, the bonds we form bring warmth and meaning to our days."
      },
      {
        id: 4,
        title: "The Wonder of Science: Unlocking the Mysteries of the Universe",
        datetime: "Jan 01, 2025 11:17:36 AM",
        body: "Science is the art of curiosity and discovery. It is humanity's quest to understand the universe, from the tiniest particles to the vastness of galaxies. Rooted in observation and experimentation, science constantly pushes the boundaries of what we know, revealing the profound intricacies of existence.A Journey Through Time Science has shaped the course of human history. From the invention of the wheel to the discovery of DNA, every breakthrough has propelled us forward. It has given us the tools to explore space, combat diseases, and connect with people across the globe. The Language of Nature At its core, science seeks to decode the language of nature. Physics explains the forces that govern our world, chemistry unveils the interactions between elements, and biology reveals the secrets of life. Together, these fields weave a tapestry that connects every living and non-living thing. Driving Innovation Science is the foundation of innovation. Advances in technology, medicine, and energy solutions owe their existence to scientific inquiry. From self-driving cars to life-saving vaccines, science continues to shape a future full of possibilities.Facing Global Challenges In the face of challenges like climate change, food scarcity, and pandemics, science provides hope. It offers sustainable solutions, inspires innovation, and empowers us to protect the planet for future generations. A Source of Inspiration Beyond practicality, science ignites wonder. It fuels our imagination as we gaze at the stars, explore the ocean depths, or marvel at the complexity of the human brain. It reminds us how much there is still to learn and discover."
      }
    ];
  });


  //api localhost:3500
  // const [posts,setPosts] = useState([]);

  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle,setPostTitle] = useState('');
  const [postBody,setPostBody] = useState('');

  const [editTitle,setEditTitle] = useState('');
  const [editBody,setEditBody] = useState('');

  // api localhost:3500
  // useEffect(()=>{
  //   const fetchPost = async()=>{
  //     try{
  //       const response = await api.get('/posts');
  //       setPosts(response.data);
  //     }catch(err){
  //       if(err.response){
  //         console.log(err.response.data);
  //         console.log(err.response.status);
  //         console.log(err.response.headers);
  //       }
  //       else{
  //         console.log(`Error: ${err.message}`);
  //       }
  //     }
  //   }
  //   fetchPost();
  // },[]);

  useEffect(()=>{
    const filteredResults = posts.filter((post)=>
    ((post.body).toLowerCase()).includes(search.toLowerCase()) 
    || ((post.title).toLowerCase()).includes(search.toLowerCase()));

     setSearchResults(filteredResults.reverse());
  },[posts,search]);

  

  // localstorage
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
            path="/edit/:id"
            element={
              <EditPostWrapper
                posts={posts}
                setPosts={setPosts}
                editBody={editBody}
                setEditBody={setEditBody}
                editTitle={editTitle}
                setEditTitle={setEditTitle}
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


// api localhost:3500
// function PostPageWrapper({ posts, setPosts }) {
//   const navigate = useNavigate();
  
//   async function handleDelete(id) {
//     try{
//       await api.delete(`/posts/${id}`);
      
//       const postList = posts.filter((post) => post.id !== id);
//       setPosts(postList);
//       navigate('/');
//     }catch(err){
//       console.log(`Error: ${err.message}`);
//     }
//   }
  
//   return <PostPage 
//   posts={posts} 
//   handleDelete={handleDelete} 
//   />;
// }

// localSotrage
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
    
  // api localhost:3500
  // function EditPostWrapper({ posts, setPosts, setEditBody, setEditTitle, editBody, editTitle }) {
  //   const navigate = useNavigate();

  //   async function handleEdit(id) {
  //     const datetime = format(new Date(), 'MMMM dd,yyyy pp');
  //     const updatedPost = { id, title: editTitle, datetime, body: editBody };

  //     try {
  //       const response = await api.put(`/posts/${id}`, updatedPost);
  //       setPosts(posts.map(post => post.id === id ? { ...response.data } : post));
  //       setEditTitle('');
  //       setEditBody('');
  //       navigate('/');
  //     } catch (err) {
  //       console.log(`Error: ${err.message}`);
  //     }
  //   }

  //   return <EditPost 
  //     posts={posts}
  //     setPosts={setPosts}
  //     editBody={editBody}
  //     editTitle={editTitle}
  //     setEditBody={setEditBody}
  //     setEditTitle={setEditTitle}
  //     handleEdit={handleEdit}
  //   />;
  // }

  //localstroage
  function EditPostWrapper({ posts, setPosts, setEditBody, setEditTitle, editBody, editTitle }) {
    const navigate = useNavigate();

    function handleEdit(id) {
      const datetime = format(new Date(), 'MMMM dd,yyyy pp');
      const updatedPost = { id, title: editTitle, datetime, body: editBody };
      setPosts(posts.map(post => post.id === id ? { ...updatedPost } : post));
      setEditTitle('');
      setEditBody('');
      localStorage.setItem('blog', JSON.stringify(posts.map(post => post.id === id ? { ...updatedPost } : post)));
      navigate('/');
    }

    return <EditPost 
      posts={posts}
      setPosts={setPosts}
      editBody={editBody}
      editTitle={editTitle}
      setEditBody={setEditBody}
      setEditTitle={setEditTitle}
      handleEdit={handleEdit}
    />;
  }
  
    
    
  
  // api localhost:3500
  // function NewPostWrapper({postBody,setPostBody,postTitle,setPostTitle,posts,setPosts}){
  //   const navigate = useNavigate();

  //   async function handleSubmit(e){
  //     e.preventDefault();
  //     if (postTitle.trim() === '' || postBody.trim() === '') {
  //       alert('Both Title and Body fields must not be blank.');
  //       return;
  //     }
  //     const id = posts.length ? posts[posts.length - 1].id+1 : 1;
  //     const datetime = format(new Date(),'MMMM dd,yyyy pp');
      
  //     const newPost = {id,title:postTitle,datetime,body:postBody};
  //     try{
  //       const response = await api.post(`/posts`,newPost);
  //       const allpost = [...posts,response.data];
  //       // console.log(allpost);
  //       setPosts(allpost);
  //       setPostTitle('');
  //       setPostBody('');
  //       // localStorage.setItem('blog',JSON.stringify(allpost));
  //       navigate('/');

  //     }catch(err){
  //       console.log(`Error ${err.message}`);
  //     }
  // }

  //localStorage
  function NewPostWrapper({postBody,setPostBody,postTitle,setPostTitle,posts,setPosts}){
  function handleSubmit(e){
    const navigate = useNavigate();
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