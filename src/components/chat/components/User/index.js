import React from 'react';
import Grid from "@material-ui/core/Grid";
import {Avatar, Badge} from "@material-ui/core";
import {useStyles} from "./style";
import {makeStyles} from "@material-ui/core/styles";


function User({room}) {

    const classes = useStyles();
    const theme = makeStyles;

    function status() {
        if (room.is_status == true) {
            return (
                <Grid xs={10} container
                      direction="row"
                      justify="flex-start"
                      alignItems="flex-start"
                >
                    <Grid className={classes.MemberStatusOnline}></Grid>
                    <Grid>online</Grid>
                </Grid>

            )
        } else {
            return (<Grid xs={10} container
                          direction="row"
                          justify="flex-start"
                          alignItems="flex-start"
            >
                <Grid className={classes.MemberStatusOffline}></Grid>
                <Grid>offline</Grid>
            </Grid>)
        }
    }

    return (
        <Grid spacing={3} container className={classes.MemberItem}>
            <Grid xs={2}>
                <Avatar alt="Remy Sharp" src={room.src}/>
            </Grid>
            <Grid xs={8} className={classes.Member}>
                <Grid xs={2}>
                    <Grid>{room.title}</Grid>
                </Grid>
                {status()}
            </Grid>
            <Grid xs={1} className={classes.MemberBadge}>
                <Badge anchorOrigin={{
                    vertical: 'center',
                    horizontal: 'center',
                }}
                       classes={{badge: classes.badge}}
                       badgeContent={room.badgeContent}
                >
                </Badge>
            </Grid>
        </Grid>
    );
}

export default User;