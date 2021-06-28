import React from 'react';
import {useStyles} from "./style";
import Grid from "@material-ui/core/Grid";
import {filter, find, map} from "lodash";
import {useDispatch, useSelector} from "react-redux";
import {messagesRequested} from "../../../../redux/slices/messages";
import User from "../User";
import {roomLoad} from "../../../../redux/slices/rooms";

function Users() {

    const classes = useStyles();

    const dispatch = useDispatch();
    const rooms = useSelector((state) => state.rooms.choiseCollection);

    const loadMessage = (id) => dispatch(messagesRequested(id))
    const loadUser = (id) => dispatch(roomLoad(id))

    return (
        <Grid className={classes.MemberList}>
            {(map(rooms, (room, index) => <p><a onClick={() => {
                    loadMessage({id: room.id})
                    loadUser({id: room.id})
                }} key={index}><User room={room}/>
                    </a></p>)
                    )
                }
                </Grid>
            );
            }

export default Users;
