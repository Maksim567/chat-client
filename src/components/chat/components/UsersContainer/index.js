import React, {useEffect, useState} from 'react';
import UserSearch from "../UserSearch";
import Users from "../Users";
import Grid from "@material-ui/core/Grid";
import {useStyles} from "./style";
import ScrollToBottom from "react-scroll-to-bottom";


function UsersContainer({users}) {

    const classes = useStyles();

    const [search, setSearch] = useState("");
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        setFilteredUsers(
            users.filter((user) =>
                user.title.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search, users]);

    return (
        <Grid xs={3} className={classes.MemberContainer}>
            <UserSearch search={search} setSearch={setSearch}/>
            <ScrollToBottom className={classes.MemberScroll}>
                <Users filteredUsers={filteredUsers} users={users}/>
            </ScrollToBottom>
        </Grid>
    );
}

export default UsersContainer;