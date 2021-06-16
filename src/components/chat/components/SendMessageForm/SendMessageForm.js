import React from 'react';
import Grid from "@material-ui/core/Grid";
import {useStyles} from "./style";
import {Input} from "@material-ui/core";


function SendMessageForm({message, setMessage, setMessages, messages}) {

    const classes = useStyles();

    return (
        <Grid container className={classes.SendMessageForm}>
            <Grid xs={8} xl={10}>
                <Input placeholder="Type your message" value={message}
                       onChange={e => setMessage(e.target.value)} fullWidth/>
            </Grid>
            <Grid xs={1} xl={1} >
                <button variant="contained" color="primary"
                        onClick={() => setMessages([...messages, message])}>Send
                </button>
            </Grid>
        </Grid>
    );
}

export default SendMessageForm;