import React from 'react'



 const Story = (props) => {
    return (
        <div className="story">
                    <img src={props.url} alt="story" className="user" />
                    <p>user_name</p>
                </div>
                
    )
}


export default Story;