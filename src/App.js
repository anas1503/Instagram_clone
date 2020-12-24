import React from 'react'
import Header from './components/Header'
import Stories from './components/Stories'
import Post from './components/Post'
import Suggestions from './components/Suggestions'
import DarkMode from './components/DarkMode'
import UserData from './components/UserData'
import './App.css'



const App = () => {

  const posts = UserData.map((item,i) => {
    return <Post
    key={i}
      username={item.username}
      caption={item.caption}
      username_url={item.username_url}
      post={item.pic}
    />
  });

  return (
    <div className="main">
      <Header />
      <DarkMode />
      <Suggestions />
      <Stories />
      {posts}


    </div>





  )
}


export default App;

