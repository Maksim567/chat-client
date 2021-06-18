import React from 'react';
import MemberItem from "../MemberItem/MemberItem";
import map from "lodash/map";
import {useStyles} from "./style";
import Grid from "@material-ui/core/Grid";

function MemberList({users}) {

    const classes = useStyles();

    return (
        <Grid className={classes.MemberList}>
            {map(users, (user, index) =>(
                <>
                    <MemberItem user={user}/>
                </>
            ))
            }
        </Grid>
    );
}

export default MemberList;