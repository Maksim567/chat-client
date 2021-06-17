import React from 'react';
import Grid from "@material-ui/core/Grid";
import {Avatar} from "@material-ui/core";


function Message({message, users}) {

    return (
        <Grid container direction="row">
            <Grid xs={9}>
                <span>You</span>
                <div>{message}</div>
            </Grid>
            <Grid xs={2}>
                <Avatar alt="Remy Sharp" src="../images/avatar.jpeg"/>
                <span>{users.user}</span>
            </Grid>
        </Grid>
    );
}

export default Message;


// let isSentByCurrentUser = false;
// const trimmedName = "maksim";
//
// if (users.user.name === trimmedName) {
//     isSentByCurrentUser = true;
//
// }

// isSentByCurrentUser
//     ? (<div className="messageContainer justifyEnd">
//         <p className="sentText pr-10">{users.name}</p>
//         <div className="messageBox backgroundBlue">
//             <p className="messageText colorDark">test</p>
//         </div>
//     </div>)
//     : (<div className="messageContainer justifyStart">
//         <div className="messageBox backgroundLight">
//             <p className="messageText colorDark">test1</p>
//         </div>
//         <p className="sentText pl-10">{users.user.name[0]}</p>
//     </div>)