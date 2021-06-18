import React from 'react';
import Grid from "@material-ui/core/Grid";
import {Avatar} from "@material-ui/core";
import {useStyles} from "./style";


function Message({message, users}) {

    const classes = useStyles();

    let isSentByCurrentUser = false;
    const trimmedName = "test";

    let user = "test";

    if (user === trimmedName) {
        isSentByCurrentUser = true;
    }

    return (
        isSentByCurrentUser
            ? (
        <Grid container className={classes.Message}>
            <Grid className={classes.MessageBlock}>
                <span>You</span>
                <div>{message}</div>
            </Grid>
            <Grid className={classes.MessageImg}>
                <Avatar alt="Remy Sharp" src="../images/avatar.jpeg"/>
                <span>12:00</span>
            </Grid>
        </Grid>)
            : (
                <Grid container className={classes.MessageView}>
                    <Grid className={classes.MessageBlock}>
                        <span>Maksim</span>
                        <div>{message}</div>
                    </Grid>
                    <Grid className={classes.MessageImg}>
                        <Avatar alt="Remy Sharp" src="../images/avatar.jpeg"/>
                        <span>12:00</span>
                    </Grid>
                </Grid>

            )
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