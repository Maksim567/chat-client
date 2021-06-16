import React from 'react';
import MemberSearch from "../MemberSearch/MemberSearch";
import MemberList from "../MemberList/MemberList";
import Grid from "@material-ui/core/Grid";
import {useStyles} from "./style";


function MemberContainer(props) {

    const classes = useStyles();

    return (
        <Grid xs={3} className={classes.MemberContainer}>
           <MemberSearch/>
            <MemberList/>
        </Grid>
    );
}

export default MemberContainer;