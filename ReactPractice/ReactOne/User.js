import React from "react";

function User(props){

    console.log(props)
    return (
        <>
            <h2>{props.userName}</h2>
            <p>{props.tweet}</p>
        </>
    );
}

export default User;