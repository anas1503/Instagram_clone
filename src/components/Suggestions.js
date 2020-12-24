import React from 'react'
import pp1 from '../assets/pp1.jpg'
import UserSuggestion from './UserSuggestion'
import SuggestionFooter from './SuggestionFooter'

const Suggestions = () => {
    return (
        <div id="new_following">
        <div className="user_info">           
         <img src={pp1} alt="user-PP" className="user" />
         <div className="name-info">
         <p><a href="https://www.instagram.com/anwer.anas19/">anwer.anas19</a></p>
         <h6 >A N A S</h6>
         </div>
         <button className="switch">Switch</button>
         </div>

         <div className="suggestions">
             <p className="suggestion-line">Suggestions for You</p>
             <p className="all_suggestion">See All</p>
         </div>

         <UserSuggestion/>
         <UserSuggestion/>
         <UserSuggestion/>
         <UserSuggestion/>
         <UserSuggestion/>
       <SuggestionFooter/>

        </div>
    )
}


export default Suggestions;