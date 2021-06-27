import React from 'react';
import {useStyles} from "./style";
import Grid from "@material-ui/core/Grid";
import {map} from "lodash";
import {useDispatch, useSelector} from "react-redux";
import {messagesRequested} from "../../../../redux/slices/messages";

function Users() {

    const classes = useStyles();
    const rooms = useSelector((state) => state.rooms.collection);

    const dispatch = useDispatch();
    const loadMessage = (id) => dispatch(messagesRequested(id))
//    const loadUser = () => dispatch(messagesRequested())
//    loadUser(),

    return (
        <Grid className={classes.MemberList}>
            {map(rooms, (room, index) => <p><a onClick={() => {
            loadMessage({id: room.id})
            }} key={index}>{room.title}
            </a></p>)}
        </Grid>
    );
}

export default Users;

// <a id={user.id}
//    onClick={e => message(index)}>
//     <User user={user}/>
// </a>
