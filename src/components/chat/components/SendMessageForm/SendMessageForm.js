import React, {useState} from 'react';
import Grid from "@material-ui/core/Grid";
import {useStyles} from "./style";
import {InputBase} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {useDispatch, useSelector} from "react-redux";
import {messagesPush} from "../../../../redux/slices/messages";

function SendMessageForm() {

    const classes = useStyles();

    const [Message, setMessage] = useState('');
    const roomLoad = useSelector((state) => state.rooms.roomLoad);

    const dispatch = useDispatch();

    function handleSubmit(e) {

        if (Message === '' || roomLoad.length === 0) {
            return e.preventDefault();
        } else {
            dispatch(messagesPush({
                id: '4',
                messageText: Message,
                createAt: '14:00'
            }))

            setMessage('')
            e.preventDefault();
        }

    }

    function handleChange(e) {
        setMessage(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <Grid xs={12} container className={classes.SendMessageForm}>
                <Grid xs={11}>
                    <InputBase type="text" placeholder="Type your message" fullWidth
                               className={classes.SendMessageInput}
                               value={Message}
                               onChange={handleChange}
                    />
                </Grid>
                <Grid xs={1}>
                    <Button type="submit" variant="contained" color="primary">Send
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
}

export default SendMessageForm;