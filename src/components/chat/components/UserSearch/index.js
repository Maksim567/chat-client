import React, {useState} from 'react';
import InputBase from "@material-ui/core/InputBase";
import {useStyles} from "./style";
import Grid from "@material-ui/core/Grid";


function UserSearch() {

    const classes = useStyles();

    return (
        <Grid className={classes.MemberSearch}>

            <InputBase
                type="text"
                placeholder="  search…"
                inputProps={{'aria-label': 'search'}}
                fullWidth
                className={classes.MemberInput}
            />
        </Grid>
    );
}

export default UserSearch;