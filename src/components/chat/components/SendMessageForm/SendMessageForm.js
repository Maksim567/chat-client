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
        <Grid container spacing={1} className={classes.SendMessageForm}>
            <Grid xs={8} xl={10}>
                <InputBase placeholder="Type your message" fullWidth className={classes.SendMessageInput}/>
            </Grid>
            <Grid xs={1} xl={1}>
                <Button variant="contained" color="primary"
                    onClick={() => (MessageSend({
                        id: '4',
                        name: "testff",
                        messageText: 'test3',
                        createAt: '12:00'
                    }))}>Send
                </Button>
            </Grid>

        </Grid>
    );
}

export default SendMessageForm;