import React from 'react'




const DarkTheme = () => {

    document.body.style.background = "rgb(17, 17, 17)";
    document.getElementById("new_following").style.backgroundColor = "rgb(17, 17, 17)";
    document.getElementById("status").style.backgroundColor = "rgb(17, 17, 17)";
    document.getElementById("status").style.color = "white";
    document.getElementById("theme").innerHTML = "Default mode";
    document.getElementById("theme").title = "Double click for Default mode";
    document.getElementById("navigation").style.background = "rgb(17, 17, 17)";
    document.getElementById("navigation").style.color = "#fafafa";
    document.getElementById("search").style.color = "black";
    document.getElementById("userInfo").style.background = "rgb(17, 17, 17)";
    document.getElementById("Switch").style.background = "rgb(17, 17, 17)";

}

const DefaultMode = () => {

    document.body.style.background = "#fafafa";
    document.getElementById("new_following").style.backgroundColor = "#fafafa";
    document.getElementById("status").style.backgroundColor = "white";
    document.getElementById("status").style.color = "black";
    document.getElementById("theme").innerHTML = "Dark Mode";
    document.getElementById("navigation").style.background = "#fff";
    document.getElementById("navigation").style.color = "black";
    document.getElementById("search").style.color = "black";
    document.getElementById("userInfo").style.background = "#fafafa";
    document.getElementById("Switch").style.background = "#fafafa";
    document.getElementById("theme").title = "click for Dark mode";

}
const DarkMode = () => {


    return (
        <>
            <button onClick={DarkTheme} onDoubleClick={DefaultMode} id="theme" className="DarkTheme" title="click for DARKMODE">Dark Mode</button>
        </>
    )
}


export default DarkMode;