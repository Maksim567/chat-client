import React from 'react';
import Grid from "@material-ui/core/Grid";
import {Avatar, Badge} from "@material-ui/core";
import LensIcon from "@material-ui/icons/Lens";
import {useStyles} from "./style";


function MemberItem({user}) {

    const classes = useStyles();

    return (
        <Grid container className={classes.MemberItem}>

            <span className="status online"></span>
            <span className="status invisible"></span>
            <span className="status idle"></span>
            <span className="status offline"></span>

            <Grid xs={2}>
                <Avatar alt="Remy Sharp" src="../images/avatar.jpeg"/>
            </Grid>
            <Grid xs={9}>
                <span>{user.name}</span>
                <div>
                    <LensIcon fontSize="small" color="primary"/>
                    <small>online</small>
                </div>
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

export default MemberItem;