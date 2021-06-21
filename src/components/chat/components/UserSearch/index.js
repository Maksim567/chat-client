import React, {useState} from 'react';
import InputBase from "@material-ui/core/InputBase";
import {useStyles} from "./style";
import SearchBar from "material-ui-search-bar";


function UserSearch() {

    const classes = useStyles();

    return (
        <div className={classes.MemberSearch}>
            <InputBase
                placeholder="  search…"
                inputProps={{'aria-label': 'search'}}
                fullWidth
                className={classes.MemberInput}
            />
        </div>
    );
}

export default UserSearch;