import React from 'react';
import InputBase from "@material-ui/core/InputBase";
import {useStyles} from "./style";

function MemberSearch(props) {

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

export default MemberSearch;