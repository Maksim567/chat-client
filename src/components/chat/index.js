import React, {useEffect, useState} from 'react';
import Main from "./components/Main/Main";
import {useDispatch, useSelector} from "react-redux";
import {usersRequested} from "../../redux/slices/users";


const ChatComponent = () => {

    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');

    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.collection);
    const isLoading = useSelector((state) => state.users.loading);

    useEffect(() => {
        dispatch(usersRequested({status: 'admin'}))
    }, users);

    return (
        <>
            <h1>Message</h1>
            <Main messages={messages} setMessages={setMessages} message={message} setMessage={setMessage}/>
        </>
    );
};

export default ChatComponent;