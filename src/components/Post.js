import React from 'react'
// import Pic1 from './assets/pp1.jpg'

import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineSharpIcon from '@material-ui/icons/ChatBubbleOutlineSharp';
import TelegramIcon from '@material-ui/icons/Telegram';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';


const Post = (props) => {
    return (
        <div className="post_container">
            <div className="post-header">
                <a href="https://www.instagram.com/stories/highlights/17867435311221793/"><img src={props.post} alt="Profile_Pic" className="post-icon" /></a>
                <a href={props.username_url} className="user-post">{props.username}</a>
                <MoreHorizIcon className="option" fontSize="default" />
            </div>

            <img src={props.post} alt="post" className="post" />

            <div className="post-responses">
                <FavoriteBorderIcon className="response" />
                <ChatBubbleOutlineSharpIcon className="response" />
                <TelegramIcon className="response" />
                <BookmarkBorderIcon fontSize="default" className="save" />
            </div>

            <p className="post-status">Liked by <span style={{ fontWeight: "bold" }}>Follower_name</span> and others</p>
            <p className="caption"><a href={props.username_url} className="caption-user">{props.username}</a>{props.caption}</p>

            <p className="comments">View all comments</p>
            <p className="post-time">5 DAYS AGO</p>

            <div className="comment-section">
                <p className="comment">Add a comment...</p>
                <h4 className="post-comment">Post</h4>
            </div>


        </div>
    )
}


export default Post;