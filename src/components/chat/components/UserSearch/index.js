import React, {useState} from 'react';
import InputBase from "@material-ui/core/InputBase";
import {useStyles} from "./style";
import Search from 'react-search';
import Grid from "@material-ui/core/Grid";


function UserSearch({setSearch, search}) {

    const classes = useStyles();

    return (
        <Grid className={classes.MemberSearch}>

            <InputBase
                type="text"
                placeholder="  search…"
                inputProps={{'aria-label': 'search'}}
                onChange={(e) => setSearch(e.target.value)}
                fullWidth
                className={classes.MemberInput}
            />
        </Grid>
    );
}

export default UserSearch;