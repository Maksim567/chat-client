import React, {useState} from 'react';
import Grid from "@material-ui/core/Grid";
import {useStyles} from "./style";
import {useDispatch} from "react-redux";
import {messagePush} from "../../../../redux/slices/messages";


function SendMessageForm() {

    const classes = useStyles();
    const dispatch = useDispatch();
    const [text, setText] = useState('');

    return (
        <Grid container className={classes.SendMessageForm}>
             <input type="text" value={text} onChange={e => setText(e.target.value)}/>
            <button
                aria-label="Increment value"
                 onClick={() => dispatch(messagePush({message: {room: "2", name: "00", text: text}}))}
             >send
             </button>
        </Grid>
    );
}

export default SendMessageForm;