import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {useStyles} from "../InputComponent/style";
import {useTheme} from "@material-ui/core/styles";
import React from "react";

const InputComponent = ({message, setMessage, setMessages, messages}) => {

    const classes = useStyles();
    const theme = useTheme();

    return (
        <>
            <Grid container className={classes.root}>
                <Grid xs={8} xl={10}>
                    <input placeholder="Type your message" className={classes.InputBlock} value={message}
                           onChange={e => setMessage(e.target.value)}/>
                </Grid>
                <Grid xs={1} xl={1}>
                    <button variant="contained" color="primary"
                            onClick={() => setMessages([...messages, message])}>Send
                    </button>
                </Grid>
            </Grid>
        </>
    );
};

export default InputComponent;