import React from 'react';
import MemberSearch from "../MemberSearch/MemberSearch";
import MemberList from "../MemberList/MemberList";
import Grid from "@material-ui/core/Grid";
import {useStyles} from "./style";


function MemberContainer({users}) {

    const classes = useStyles();

    return (
        <Grid xs={3} className={classes.MemberContainer}>
           <MemberSearch/>
            <MemberList users={users}/>
        </Grid>
    );
}

export default MemberContainer;