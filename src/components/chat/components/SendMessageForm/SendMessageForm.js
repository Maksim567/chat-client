import React from 'react';
import Grid from "@material-ui/core/Grid";
import {useStyles} from "./style";
import {Input, InputBase} from "@material-ui/core";
import Button from "@material-ui/core/Button";


function SendMessageForm() {

    const classes = useStyles();

    return (
        <Grid container className={classes.SendMessageForm}>

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