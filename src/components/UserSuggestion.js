import React from 'react'
import pp1 from '../assets/pp1.jpg'

 const UserSuggestion = () => {
    return (
        
        <div className="user-suggestions">
        <img src={pp1} alt="user-PP" className="suggested-dp" />
        <div className="suggested-info">
       <p className="suggested-userName">user-name</p>
       <p className="user-followers">Followed by user_following + n more</p>
        </div>
        <p className="suggested-follow">Follow</p>
        </div>
    )
}


export default UserSuggestion;