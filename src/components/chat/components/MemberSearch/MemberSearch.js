import React from 'react';
import InputBase from "@material-ui/core/InputBase";

function MemberSearch(props) {
    return (
        <div>
            <InputBase
                placeholder="  search…"
                inputProps={{'aria-label': 'search'}}
                fullWidth
            />
        </div>
    );
}

export default MemberSearch;