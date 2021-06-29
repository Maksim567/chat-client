import React from 'react';
import SendMessageForm from "../SendMessageForm/SendMessageForm";
import Grid from "@material-ui/core/Grid";
import Messages from "../Messages";
import {useSelector} from "react-redux";
import ChatBar from "../ChatBar";


function ChatField() {

    const room = useSelector((state) => state.rooms.roomLoad);

    let CurrentUser = false;

    if (room.length != 0) {

        CurrentUser = true;
    }


    return (
        CurrentUser
            ? (
        <Grid>
                <ChatBar/>
                <Messages/>
                <SendMessageForm/>
        </Grid>)  : (<Grid></Grid>

            )


    );
}

export default ChatField;