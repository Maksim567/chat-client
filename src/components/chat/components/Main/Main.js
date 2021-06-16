import React from 'react';
import ChatField from "../ChatField/ChatField";
import Grid from "@material-ui/core/Grid";
import MemberContainer from "../MemberContainer/MemberContainer";
import {useStyles} from "./style";

function Main({message, setMessage, setMessages, messages}) {

    const classes = useStyles();

    return (
        <Grid container className={classes.Main}>
            <MemberContainer/>
            <ChatField messages={messages} message={message} setMessages={setMessages} setMessage={setMessage} />
        </Grid>
    );
}

export default Main;