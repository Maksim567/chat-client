import React from 'react';
import Message from "../Message";
import ScrollToBottom from "react-scroll-to-bottom";
import {useStyles} from "./style";
import map from "lodash/map";

function MessagesComponent({users}) {

    const classes = useStyles();


    return (
        <ScrollToBottom className={classes.MessagesContainer}>
            {map(users, (user, index) => (
                <>
                    <Message key={index} user={user}/>
                </>
            ))
            }
        </ScrollToBottom>
    );
}

export default MessagesComponent;