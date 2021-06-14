import Grid from '@material-ui/core/Grid';
import {Container} from "@material-ui/core";
import {useStyles} from './style';
import UsersContainer from "./component/UsersContainer/UsersContainer";
import InfoBar from "./component/InfoBar/InfoBar";
import Messages from "./component/Messages/Messages";
import InputComponent from "./component/InputComponent/InputComponent";
import React, {useEffect, useState} from "react";
import {useTheme} from "@material-ui/core/styles";
import Message from "./component/Message/Message";

const ChatComponent = () => {

    const classes = useStyles();
    const theme = useTheme();

    return (
        <>
            <Container maxWidth="lg">
                <h2>Messages</h2>
                  <Grid container className={classes.root}>
                    <Grid xs={12} xl={3} className={classes.LeftMessages}>
                        <UsersContainer/>
                    </Grid>
                    <Grid container xs={12} xl={9}>
                        <InfoBar/>
                        <Messages/>
                        <InputComponent/>
                    </Grid>
                </Grid>
            </Container>
        </>

    )
        ;
};

export default ChatComponent;