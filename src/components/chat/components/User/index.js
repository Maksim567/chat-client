import React from 'react';
import Grid from "@material-ui/core/Grid";
import {Avatar, Badge} from "@material-ui/core";
import LensIcon from "@material-ui/icons/Lens";
import {useStyles} from "./style";
import {makeStyles} from "@material-ui/core/styles";


function User({room}) {

    const classes = useStyles();
    const theme = makeStyles;

    return (
        <Grid spacing={3} container className={classes.MemberItem}>
            <Grid xs={2}>
                <Avatar alt="Remy Sharp" src={room.src}/>
            </Grid>
            <Grid xs={8} className={classes.Member}>
                <Grid xs={2}>
                    <span>{room.title}</span>
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