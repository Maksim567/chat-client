import React from 'react';
import {useStyles} from "./style";
import {Avatar, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText} from "@material-ui/core";
import {map} from "lodash";
import {useSelector} from "react-redux";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import PhoneIcon from '@material-ui/icons/Phone';
import VideocamIcon from '@material-ui/icons/Videocam';
import {useTheme} from "@material-ui/core/styles";

function ChatBar() {

    const classes = useStyles();
    const theme = useTheme();

    const room = useSelector((state) => state.rooms.roomLoad);

    return (
        <>
            {map(room, (roomId, index) =>
                <List key={index} className={classes.ChatList}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src={roomId.src}/>
                        </ListItemAvatar>
                        <ListItemText primary={roomId.title}/>
                        <ListItemSecondaryAction className={classes.root}>
                            <Button variant="contained" color="primary"><PhoneIcon/></Button>
                            <Button variant="contained"><VideocamIcon/></Button>
                            <Button variant="contained" color="secondary">
                                ...
                            </Button>
                        </ListItemSecondaryAction>
                    </ListItem>
                </List>)}
        </>
    );
}

export default ChatBar;
