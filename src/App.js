import React from 'react'
import Header from './Header'
import Stories from './Stories'
import Post from './Post'
import Suggestions from './Suggestions'
import DarkMode from './DarkMode'
import UserData from './UserData'
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

