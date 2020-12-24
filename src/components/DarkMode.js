import React from 'react'



  
const DarkTheme= () =>{
      
    document.body.style.background="rgb(36, 36, 36)";
    document.getElementById("new_following").style.backgroundColor="black";
    document.getElementById("navigation").style.backgroundColor="#fafafa";
    document.getElementById("status").style.backgroundColor="black";
    document.getElementById("status").style.color="white";
    document.getElementById("theme").innerHTML="Default mode";
 }
 const DarkMode = () => {

  
    return (
        <>
             <button onClick={DarkTheme} id="theme" className="DarkTheme">Dark Mode</button>
        </>
    )
}


export default DarkMode;