import React from 'react';
import Grid from "@material-ui/core/Grid";
import {Avatar, Badge} from "@material-ui/core";
import LensIcon from "@material-ui/icons/Lens";
import {useStyles} from "./style";


function User({user}) {

    const classes = useStyles();

    return (
            <Grid container className={classes.MemberItem}>
                <Grid xs={2}>
                    <Avatar alt="Remy Sharp" src={user.picture}/>
                </Grid>
                <Grid spacing={2} xs={8}>
                    <span>{user.title}</span>
                    <Grid xs={12}>
                        <LensIcon fontSize="small" color="primary"/>
                        <small>online</small>
                    </Grid>
                </Grid>
                <Grid xs={1}>
                    <Badge anchorOrigin={{
                        vertical: 'center',
                        horizontal: 'center',
                    }}

                           classes={{badge: classes.badge}}
                           badgeContent={user.badgeContent}
                           badgeContent={4}

                    >
                    </Badge>
                </Grid>
            </Grid>
    );
}

export default User;