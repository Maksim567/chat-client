import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {roomsRequested} from "../../../../redux/slices/rooms";
import {useStyles} from "./style";
import Grid from "@material-ui/core/Grid";
import Main from "../Main";


const ChatComponent = () => {

        const classes = useStyles();
        const dispatch = useDispatch();

        useEffect(() => {
            dispatch(roomsRequested())
        }, [dispatch]);

        return (
            <>

                <h1 className={classes.root}>Chat</h1>
                <Grid container>
                    <Main/>
                </Grid>
            </>
        );
    }
;

export default ChatComponent;


// <Grid container>
//     <Grid xs={2}>
//         {map(rooms, (room, index) => <a key={index} onClick={() => dispatch(messagesRequested(room.id))}>
//             <p>{room.title}</p></a>)}
//     </Grid>
//     <Grid xs={8}>
//         {map(messages, (message, index) => <p key={index}>{message.room}:{message.text}</p>)}
//     </Grid>
// </Grid>
// <input type="text" value={text} onChange={e => setText(e.target.value)}/>
// <button
//     aria-label="Increment value"
//     onClick={() => dispatch(messagesPush({message: {room: "2", name: "00", text: text}}))}
// >send
// </button>
