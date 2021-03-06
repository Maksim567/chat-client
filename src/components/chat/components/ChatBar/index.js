import React from 'react';
import Grid from "@material-ui/core/Grid";
import {useStyles} from "./style";
import {Avatar} from "@material-ui/core";

function ChatBar({users, id}) {

    const classes = useStyles();

    return (
            <Grid container className={classes.ChatBar}>
                <Grid container xs={6} xl={9}>
                    <Avatar alt="Remy Sharp" src="../images/avatar.jpeg"/>
                    <div className={classes.ContactBlock}>
                        <span>name</span>
                        <small>Typing...</small>
                    </div>
                </Grid>
                <Grid container className={classes.ContactButton}>

                </Grid>
            </Grid>
    );
}

export default ChatBar;