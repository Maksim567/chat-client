import React, {useState} from 'react';
import Grid from "@material-ui/core/Grid";
import {useStyles} from "./style";
import {Input, InputBase} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {useDispatch, useSelector} from "react-redux";
import {messagesPush} from "../../../../redux/slices/messages";


function SendMessageForm() {

    const classes = useStyles();

    const dispatch = useDispatch();
    const MessageSend = (id) => dispatch(messagesPush(id))

    return (
        <Grid container className={classes.SendMessageForm}>

            <button
                onClick={() => (MessageSend({id: '4', name: "testff", messageText: 'test3', createAt: '12:00'}))}>load
                users
            </button>
            {/*<form className="form">*/}
            {/*    <input*/}
            {/*        className="input"*/}
            {/*        type="text"*/}
            {/*        placeholder="Введите сообщение..."*/}
            {/*        value={message}*/}
            {/*        onChange={e => setMessage(e.target.value)}*/}
            {/*    />*/}
            {/*    <button className="sendButton" onClick={() => setMessages([...messages, message])}>Отправить</button>*/}
            {/*</form>*/}
        </Grid>
    );
}

export default SendMessageForm;