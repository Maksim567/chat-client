import React from 'react';
import Grid from "@material-ui/core/Grid";
import {useStyles} from "./style";
import {Avatar} from "@material-ui/core";
import {filter, map} from "lodash";
import {useSelector} from "react-redux";

function ChatBar() {

    const classes = useStyles();
    const rooms = useSelector((state) => state.rooms.collection);

    let filtered_array =
        filter(rooms, {id: '1'});

    return (
            <Grid container className={classes.ChatBar}>

                    {map(filtered_array, (room, index) => <Grid container xs={6} xl={9}>
                            <Avatar alt="Remy Sharp" src={room.src}/>
                        <span>{room.title}</span>
                            <Grid className={classes.ContactBlock}>
                                <span>typing</span>
                            </Grid>

                        </Grid>
                        )
                    }


                <Grid container className={classes.ContactButton}>

                </Grid>
            </Grid>
    );
}

export default ChatBar;