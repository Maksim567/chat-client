import React from 'react';
import Grid from "@material-ui/core/Grid";
import {Avatar, Badge} from "@material-ui/core";
import LensIcon from "@material-ui/icons/Lens";

function MemberItem(props) {
    return (
        <Grid container>
            <Grid xs={2}>
                <Avatar alt="Remy Sharp"/>
            </Grid>
            <Grid xs={9}>
                <span>Maksim</span>
                <div>
                    <LensIcon/>
                    <small>online</small>
                </div>
            </Grid>
            <Grid xs={1}>
                <Badge anchorOrigin={{
                    vertical: 'center',
                    horizontal: 'center',
                }}
                       badgeContent={4}
                       color="primary"
                >
                </Badge>
            </Grid>
        </Grid>
    );
}

export default MemberItem;