import React, {useEffect} from 'react';
import map from "lodash/map";
import {useStyles} from "./style";
import Grid from "@material-ui/core/Grid";
import User from "../../../../../pages/users/[id]/[user]";


function UsersComponent({users}) {

    const classes = useStyles();

    return (
        <Grid className={classes.MemberList}>
            {map(users, (user, index) =>(
                <>
                    <User user={user}/>
                </>
            ))
            }
        </Grid>
    );
}

export default UsersComponent;