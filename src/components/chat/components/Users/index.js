import React from 'react';
import {useStyles} from "./style";
import Grid from "@material-ui/core/Grid";
import {filter, find, map} from "lodash";
import {useDispatch, useSelector} from "react-redux";
import {messagesRequested} from "../../../../redux/slices/messages";
import User from "../User";

function Users() {

    const classes = useStyles();
    const rooms = useSelector((state) => state.rooms.collection);

    const dispatch = useDispatch();
    const loadMessage = (id) => dispatch(messagesRequested(id))

    console.log(map(rooms, "id"))

    return (
        <Grid className={classes.MemberList}>
            {
                filter((map(rooms, (room, index) => <p><a onClick={() => {
            loadMessage({id: room.id})
            }} key={index}><User room={room}/>
            </a></p>)
            ))

            }
        </Grid>
    );
}

export default Users;
