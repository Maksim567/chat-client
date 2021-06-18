import React from 'react';
import Grid from "@material-ui/core/Grid";
import {Avatar, Badge, Link} from "@material-ui/core";
import LensIcon from "@material-ui/icons/Lens";
import {useStyles} from "./style";
import {useRouter} from "next/router";


function MemberItem({user}) {

    const classes = useStyles();

    const router = useRouter()
    const { id } = router.query

    return (
            <Grid container className={classes.MemberItem}>
                <Grid xs={2}>
                    <Avatar alt="Remy Sharp" src={user.picture}/>
                </Grid>
                <Grid xs={9}>
                    <span>{user.id}</span>
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