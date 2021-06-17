import React, {useEffect, useState} from 'react';
import Main from "./components/Main/Main";
import {useDispatch, useSelector} from "react-redux";
import {usersRequested} from "../../redux/slices/users";
import map from "lodash/map";
import Message from "../chats/component/Message/Message";
import {Link} from "@material-ui/core";
import {useStyles} from "./style";


const ChatComponent = ({}) => {

    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');

    const classes = useStyles();

    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.collection);
    const isLoading = useSelector((state) => state.users.loading);

    useEffect(() => {
        dispatch(usersRequested({status: 'admin'}))
    }, [dispatch]);


    return (
        <>
            <h1 className={classes.MainTitle}>Message</h1>
            <Main messages={messages} setMessages={setMessages} message={message} setMessage={setMessage}
                  users={users}/>
        </>
    );
}

export default ChatComponent;