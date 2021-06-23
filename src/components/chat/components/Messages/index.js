import React, {useEffect, useState} from 'react';
import ScrollToBottom from "react-scroll-to-bottom";
import {useStyles} from "./style";
import Message from "../Message";

function Messages({users}) {

    const classes = useStyles();

    return (
        <ScrollToBottom className={classes.MessagesContainer}>

            <>
                {/*{messages.map((message, i) => (*/}
                {/*    <div key={i}>*/}
                {/*        <Message message={message} name={name}/>*/}
                {/*    </div>*/}
                {/*))}*/}
            </>

        </ScrollToBottom>
    );
}

export default Messages;