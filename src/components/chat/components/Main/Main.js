import React from 'react';
import ChatField from "../ChatField/ChatField";
import Grid from "@material-ui/core/Grid";
import MemberContainer from "../MemberContainer/MemberContainer";
import {useStyles} from "./style";

function Main({message, setMessage, setMessages, messages, users}) {

    const classes = useStyles();

    return (
        <Grid container className={classes.Main}>
            <MemberContainer users={users}/>
            <ChatField messages={messages} message={message} setMessages={setMessages} setMessage={setMessage} users={users}/>
        </Grid>
    );
}

export default Main;