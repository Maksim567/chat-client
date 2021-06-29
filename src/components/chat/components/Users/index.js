import React from 'react';
import {useStyles} from "./style";
import {map} from "lodash";
import {useSelector} from "react-redux";
import User from "../User";
import List from "@material-ui/core/List";


function Users() {

    const classes = useStyles();
    const rooms = useSelector((state) => state.rooms.choiseCollection);

    return (
        <List className={classes.root}>
            {
                (map(rooms, (room, index) => <User room={room} key={index}/>))
            }
        </List>
    );
}

export default Users;
