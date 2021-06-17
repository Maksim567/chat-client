import React from 'react';
import Grid from "@material-ui/core/Grid";
import {useStyles} from "./style";
import {Input, InputBase} from "@material-ui/core";
import Button from "@material-ui/core/Button";


function SendMessageForm({message, setMessage, setMessages, messages}) {

    const classes = useStyles();

    return (
        <Grid container className={classes.SendMessageForm}>
            <Grid xs={8} xl={10}>
                <InputBase placeholder="Type your message" value={message}
                       onChange={e => setMessage(e.target.value)} fullWidth className={classes.SendMessageInput}/>
            </Grid>
            <Grid xs={1} xl={1} >
                <Button variant="contained" color="primary"
                        onClick={() => setMessages([...messages, message])}>Send
                </Button>
            </Grid>
        </Grid>
    );
}

export default SendMessageForm;