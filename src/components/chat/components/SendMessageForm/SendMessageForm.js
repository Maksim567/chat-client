import React from 'react';
import {useStyles} from "./style";
import {InputBase, Grid, Button} from "@material-ui/core";
import {useDispatch} from "react-redux";
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
                        name: "message",
                        messageText: 'test3',
                        createAt: '12:00'
                    }))}>Send
                </Button>
            </Grid>

        </Grid>
    );
}

export default SendMessageForm;