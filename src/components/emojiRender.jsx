import React from "react";


function Emoji(props){
    return (
        <div className="box">
            <div >
            <h1 className="main">{props.name}</h1>
            <p className="emoji">{props.emoji}</p>
            <p className="details">{props.meaning}</p>
            </div>
        </div>
    )
}

export default Emoji;