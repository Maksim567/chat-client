import React from 'react';
import Grid from "@material-ui/core/Grid";
import {useStyles} from "./style";
import {Avatar} from "@material-ui/core";
import {map} from "lodash";
import {useSelector} from "react-redux";
import Button from "@material-ui/core/Button";

function ChatBar() {

    const classes = useStyles();

    const room = useSelector((state) => state.rooms.roomLoad);

    let CurrentUser = false;

    if (room.length != 0) {

        CurrentUser = true;
    }

    return (
        CurrentUser
            ? (
                <Grid container className={classes.ChatBar}>

                    {map(room, (roomId, index) => <Grid container key={index} xs={6} xl={9}
                        >
                            <Grid xs={1}>
                                <Avatar alt="Remy Sharp" src={roomId.src}/>
                            </Grid>
                            <Grid className={classes.ContactBlock}>
                                <span>{roomId.title}</span>
                                <small>typing</small>
                            </Grid>
                        </Grid>
                    )
                    }
                    <Grid xs={6} xl={3} className={classes.ChatBarButton}>

                        <Button variant="contained" color="primary"></Button>
                        <Button variant="contained" color="primary">fsd</Button>
                        <Button variant="contained">ffs</Button>

                    </Grid>
                </Grid>) : (
                <Grid container className={classes.ChatBar}>
                    <Grid xs={1}>
                        <Avatar alt="Remy Sharp"/>
                    </Grid>
                    <Grid xs={6} className={classes.ContactBlock}>
                        <span></span>
                        <small>typing</small>
                    </Grid>
                    <Grid xs={6} xl={3} className={classes.ChatBarButton}>

                        <Button variant="contained" color="primary">fsd</Button>
                        <Button variant="contained" color="primary">fsd</Button>
                        <Button variant="contained">ffs</Button>

                    </Grid>
                </Grid>
            )
    );
}

export default ChatBar;