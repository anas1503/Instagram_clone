import React from 'react'
import Icons from './Icons'

 const Header = () => {
    return (
        <div className="header" id="navigation">
        <h2>Instagram</h2>
        <input type="search" placeholder="search" className="place_icon"></input>
        <Icons />
        </div>    
    )
}

export default Header;