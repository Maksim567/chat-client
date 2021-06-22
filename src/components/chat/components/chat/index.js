import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {usersRequested} from "../../../../redux/slices/users";
import {useStyles} from "./style";
import Main from "../Main";
import Grid from "@material-ui/core/Grid";
import {useRouter} from "next/router";


const ChatComponent = () => {

    const router = useRouter();
    const {id} = router.query;
    // console.log(id);

    const classes = useStyles();

    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.collection);
    const isLoading = useSelector((state) => state.users.loading);

    const [name, setName] = useState('maksim');
    const [room, setRoom] = useState('1');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    // const [users, setUsers] = useState([]);

    useEffect(() => {
        dispatch(usersRequested({status: 'admin'}))
    }, [dispatch]);

    useEffect(() => {
        setName(name);
        setRoom(room);
        console.log(name);
        console.log(room);
    }, [room, name]);

    useEffect(() => {
        if (message) {
            setMessages([...messages, message]);
        }
    }, [messages]);

    console.log(message, messages);

    return (
        <>
            <h1 className={classes.MainTitle}>Message</h1>

            <Grid container>
                <Main users={users}/>
            </Grid>
        </>
    )
        ;
}

export default ChatComponent;