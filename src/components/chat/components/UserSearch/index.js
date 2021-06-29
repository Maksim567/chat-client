import React, {useState} from 'react';
import InputBase from "@material-ui/core/InputBase";
import {useStyles} from "./style";
import {useDispatch} from "react-redux";
import {roomsFillter, roomsRequested} from "../../../../redux/slices/rooms";
import Grid from "@material-ui/core/Grid";


function UserSearch() {

    const classes = useStyles();

    const [inputValue, setInputValue] = useState('');

    const dispatch = useDispatch();

    function handleChange(e) {
        setInputValue(e.target.value)
        if (e.target.value == '') {
            dispatch(roomsRequested())
        } else {
            dispatch(roomsFillter({title: e.target.value}))
        }
    }

    return (
        <Grid>
            <InputBase
                type="text"
                placeholder="  search…"
                inputProps={{'aria-label': 'search'}}
                fullWidth
                value={inputValue}
                onChange={handleChange}
                className={classes.MemberInput}
            />
        </Grid>
    );
}

export default UserSearch;