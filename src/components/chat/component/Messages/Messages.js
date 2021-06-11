import Grid from "@material-ui/core/Grid";
import {useStyles} from ".//style";
import Message from "../Message/Message";
import React, {useState} from "react";
import {Avatar} from "@material-ui/core";

const Messages = () => {

    const classes = useStyles();

    return (
        <>
            <Grid container className={classes.root}>
                <Grid container className={classes.root}>
                    <Grid container direction="row">
                        <Grid className={classes.MessageBlock} xs={9}>
                            <span>You</span>
                            <div>Lorem ipsum dolor sit amet, vis erat denique in, dicunt
                                prodesset te vix.orem ipsum dolor sit amet, vis erat denique in, dicunt
                                prodesset te vix.orem ipsum dolor sit amet, vis erat denique in, dicunt
                                prodesset te vix.orem ipsum dolor sit amet, vis erat denique in, dicunt
                                prodesset te vix.orem ipsum dolor sit amet, vis erat denique in, dicunt
                                prodesset te vix.
                            </div>
                        </Grid>
                        <Grid className={classes.MessageImg} xs={2}>
                            <Avatar alt="Remy Sharp" src="../images/avatar.jpeg"/>
                            <span>2:37 am</span>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container className={classes.root}>
                    <Grid container direction="row">
                        <Grid className={classes.MessageBlock} xs={9}>
                            <span>You</span>
                            <div>Lorem ipsum dolor sit amet, vis erat denique in, dicunt
                                prodesset te vix.orem ipsum dolor sit amet, vis erat denique in, dicunt
                                prodesset te vix.orem ipsum dolor sit amet, vis erat denique in, dicunt
                                prodesset te vix.orem ipsum dolor sit amet, vis erat denique in, dicunt
                                prodesset te vix.orem ipsum dolor sit amet, vis erat denique in, dicunt
                                prodesset te vix.
                            </div>
                        </Grid>
                        <Grid className={classes.MessageImg} xs={2}>
                            <Avatar alt="Remy Sharp" src="../images/avatar.jpeg"/>
                            <span>2:37 am</span>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default Messages;