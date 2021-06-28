import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {roomsRequested} from "../../../../redux/slices/rooms";
import {useStyles} from "./style";
import Grid from "@material-ui/core/Grid";
import Main from "../Main";
import {messagesRequested} from "../../../../redux/slices/messages";


const ChatComponent = () => {

    const classes = useStyles();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(roomsRequested())
    }, [dispatch]);

    return (
        <>
            <h1 className={classes.root}>Chat</h1>
            <Grid container>
                <Main/>
            </Grid>
        </>
    )
        ;
}

export default ChatComponent;



// const indexa = {id: 1}
// let states = find(rooms, (indexa))
// console.log(states)
// console.log(states)
//
// let filtered_array =
//     filter(rooms, {id: 1});

// Printing the output
//console.log(filtered_array);


{/*<Grid container>*/}
{/*    <Grid xs={2}>*/}
{/*        {map(rooms, (room, index) => <p key={index}><Avatar alt="Remy Sharp" src={room.src}/></p>)}*/}
{/*    </Grid>*/}
{/*    <Grid xs={8}>*/}
{/*        {map(messages, (message, index) => <p key={index}>dsfs</p>)}*/}
{/*    </Grid>*/}
{/*</Grid>*/}
{/*<button onClick={loadUsers}>fdfs</button>*/}
{/*<button onClick={loadUsersg}>11</button>*/}
{/*<button onClick={roomLoadf}></button>*/}
{/*{map(filtered_array, (message, index) => <p key={index}>{message.id}</p>)}*/}


//   const rooms = useSelector((state) => state.rooms.collection);
// const messages = useSelector((state) => state.messages.collection);
// const isLoading = useSelector((state) => state.rooms.loading);

// const loadUsers = () => dispatch(messagesPush({id: "fdf", name: "fsdfd"}))
// const loadUsersg = () => dispatch(messagesRequested())
// const roomLoadf = () => dispatch(roomLoad({id: '1'}))
