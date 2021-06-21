import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {usersRequested} from "../../redux/slices/users";
import {useStyles} from "./style";
import Rooms from "./components/Rooms";

const ChatComponent = () => {

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
            <Rooms users={users}/>
        </>
    );
}

export default ChatComponent;