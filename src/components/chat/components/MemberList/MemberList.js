import React from 'react';
import MemberItem from "../MemberItem/MemberItem";
import map from "lodash/map";
import {useStyles} from "./style";

function MemberList({users}) {

    const classes = useStyles();

    return (
        <section className={classes.MemberList}>
            {map(users, (user, index) =>
                <MemberItem user={user}/>)
            }

        </section>
    );
}

export default MemberList;