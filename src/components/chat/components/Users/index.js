import React, {useEffect, useState} from 'react';
import {useStyles} from "./style";
import Grid from "@material-ui/core/Grid";
import {map} from "lodash";
import {useDispatch, useSelector} from "react-redux";
import {messagesRequested} from "../../../../redux/slices/messages";


function Users() {

    const classes = useStyles();
    const dispatch = useDispatch();
    const rooms = useSelector((state) => state.rooms.collection);

    return (
        <Grid className={classes.MemberList}>
            {map(rooms, (room, index) => <a key={index} onClick={() => dispatch(messagesRequested(room.id))}>
                <p>{room.title}</p></a>)}
        </Grid>
    );
}

export default Users;
