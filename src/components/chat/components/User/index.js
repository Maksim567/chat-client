import React from 'react';
import Grid from "@material-ui/core/Grid";
import {Avatar, Badge} from "@material-ui/core";
import LensIcon from "@material-ui/icons/Lens";
import {useStyles} from "./style";
import {makeStyles} from "@material-ui/core/styles";


function User({user}) {

    const classes = useStyles();
    const theme = makeStyles;

    let status;

    if (user.is_status === true) {
        status = "online";

    } else {
        status= "offline";
    }

    return (
        <Grid spacing={3} container className={classes.MemberItem}>
            <Grid xs={2}>
                <Avatar alt="Remy Sharp" src={user.src}/>
            </Grid>
            <Grid xs={8} className={classes.Member}>
                <Grid xs={2}>
                    <span>{user.title}</span>
                </Grid>
                <Grid xs={10}>
                    <div className={classes.MemberStatus}></div>
                    <div>online</div>
                </Grid>
            </Grid>
            <Grid xs={1} className={classes.MemberBadge}>
                <Badge anchorOrigin={{
                    vertical: 'center',
                    horizontal: 'center',
                }}

                       classes={{badge: classes.badge}}
                       badgeContent={4}

                >
                </Badge>
            </Grid>
        </Grid>
    );
}

export default User;