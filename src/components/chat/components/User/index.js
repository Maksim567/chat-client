import React from 'react';
import {Avatar, Badge, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText} from "@material-ui/core";
import {useStyles} from "./style";
import {useDispatch} from "react-redux";
import {messagesRequested} from "../../../../redux/slices/messages";
import {roomLoad} from "../../../../redux/slices/rooms";

function User({room}) {

    const classes = useStyles();

    const dispatch = useDispatch();

    const loadMessage = (id) => dispatch(messagesRequested(id))
    const loadUser = (id) => dispatch(roomLoad(id))

    function status() {
        if (room.is_status === true) {
            return (<>
                    <div className={classes.MemberStatusOnline}></div>
                    <small>online</small>
                </>
            )
        } else {
            return (<>
            <div className={classes.MemberStatusOffline}></div>
            <small>offline</small>
        </>)
        }
    }

    function ListItemLink(props) {
        return <ListItem button component="a" {...props} />;
    }

    return (

            <ListItemLink onClick={() => {
                loadMessage({id: room.id})
                loadUser({id: room.id})
            }}>
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={room.src}/>
                </ListItemAvatar>
                <ListItemText primary={room.title} classes={{secondary: classes.secondary}} secondary={status()}/>
                <ListItemSecondaryAction>
                    <Badge
                        classes={{badge: classes.badge}}
                        badgeContent={room.badgeContent}
                    >
                    </Badge>
                </ListItemSecondaryAction>
            </ListItemLink>

    );
}

export default User;


// <Grid xs={2}>
//
// </Grid>
// <Grid xs={8} className={classes.Member}>
//     <Grid xs={2}>
//         <Grid>{room.title}</Grid>
//     </Grid>
//     {    room.is_status
//         ? (
//             <Grid xs={10} container
//                   direction="row"
//                   justify="flex-start"
//                   alignItems="flex-start"
//             >
//                 <Grid className={classes.MemberStatusOnline}></Grid>
//                 <Grid>online</Grid>
//             </Grid>
//         ): (
//             <Grid xs={10} container
//                   direction="row"
//                   justify="flex-start"
//                   alignItems="flex-start"
//             >
//                 <Grid className={classes.MemberStatusOffline}></Grid>
//                 <Grid>offline</Grid>
//             </Grid>
//         )
//     }
// </Grid>