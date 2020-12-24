import React from 'react'



  
const DarkTheme= () =>{
      
    document.body.style.background="rgb(17, 17, 17)";
    document.getElementById("new_following").style.backgroundColor="rgb(17, 17, 17)";
    document.getElementById("navigation").style.backgroundColor="#fafafa";
    document.getElementById("status").style.backgroundColor="rgb(17, 17, 17)";
    document.getElementById("status").style.color="white";
    document.getElementById("theme").innerHTML="Default mode";
    document.getElementById("navigation").style.background="rgb(17, 17, 17)";
    document.getElementById("navigation").style.color="#fafafa";
    document.getElementById("search").style.color="black";
    document.getElementById("userInfo").style.background="rgb(17, 17, 17)";
    document.getElementById("Switch").style.background="rgb(17, 17, 17)";

}
 const DarkMode = () => {

  
    return (
        <>
             <button onClick={DarkTheme} id="theme" className="DarkTheme">Dark Mode</button>
        </>
    )
}


export default DarkMode;