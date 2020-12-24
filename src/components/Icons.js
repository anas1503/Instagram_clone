import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import TelegramIcon from '@material-ui/icons/Telegram';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExploreIcon from '@material-ui/icons/Explore';
import HomeIcon from '@material-ui/icons/Home';

export const Icons = () => {
    return (
        <>
            <SearchIcon fontSize="small" className="input_icon" id="search"/>
         <div className="icon-container">
         <HomeIcon fontSize="default" className="Icons" />   
        <TelegramIcon fontSize="default" className="Icons" />
        <ExploreIcon fontSize="default" className="Icons"/>
        <FavoriteBorderIcon fontSize="default" className="Icons" />
        <AccountCircleIcon fontSize="default" className="Icons" />
       
       </div>
        </>
    )
}

export default Icons;