import Grid from '@material-ui/core/Grid';
import {Container} from "@material-ui/core";
import {useStyles} from './style';
import UsersContainer from "./component/UsersContainer/UsersContainer";
import InfoBar from "./component/InfoBar/InfoBar";
import Messages from "./component/Messages/Messages";
import InputComponent from "./component/InputComponent/InputComponent";
import React, {useEffect, useState} from "react";
import {useTheme} from "@material-ui/core/styles";
import {useDispatch, useSelector} from "react-redux";
import {usersRequested} from "../../redux/slices/users";


const ChatComponent = () => {

    const classes = useStyles();
    const theme = useTheme();

    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.collection);
    const isLoading = useSelector((state) => state.users.loading);

    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        dispatch(usersRequested({status: 'admin'}))
    }, [users]);

    return (
        <>
            <Container maxWidth="lg">

                <h2>Messages</h2>
                  <Grid container className={classes.root}>
                    <Grid xs={12} xl={3} className={classes.LeftMessages}>
                        <UsersContainer users={users}/>
                    </Grid>
                    <Grid container xs={12} xl={9}>
                        <InfoBar/>
                        <Messages users={users} messages={messages} message={message}/>
                        <InputComponent messages={messages} message={message} setMessages={setMessages} setMessage={setMessage}/>
                    </Grid>
                </Grid>
            </Container>
        </>

    )
        ;
};

export default ChatComponent;