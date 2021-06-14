import InputBase from "@material-ui/core/InputBase";
import Grid from "@material-ui/core/Grid";
import {Avatar, Badge, Typography} from "@material-ui/core";
import LensIcon from "@material-ui/icons/Lens";
import {useStyles} from "../UsersContainer/style";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {usersRequested} from "../../../../redux/slices/users";
import map from "lodash/map";
import Users from "../../../users";

const UsersContainer = () => {

    const classes = useStyles();

    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.collection);
    const isLoading = useSelector((state) => state.users.loading);

    useEffect(()=> {
        dispatch(usersRequested({status: 'admin'}))
    }, [Users]);

    return (
        <>
            <Grid container xs={12}>
                <InputBase
                    placeholder="  search…"
                    inputProps={{'aria-label': 'search'}}
                    className={classes.InputRoot}
                    fullWidth
                />
            </Grid>
            {map(users, (user, index) => <Grid container className={classes.ContactBlock} key={index}>
                        <Grid xs={2}>
                            <Avatar alt="Remy Sharp" src={user.src}/>
                        </Grid>
                        <Grid xs={9}>
                            <span className={classes.ContactNames}>{user.name}</span>
                            <div className={classes.ContactSmall}>
                                <LensIcon/>
                                <small>онлайн</small>
                            </div>
                        </Grid>
                        <Grid xs={1}>
                            <Badge anchorOrigin={{
                                vertical: 'center',
                                horizontal: 'center',
                            }}
                                   classes={{badge: classes.badge}}
                                   badgeContent={user.badgeContent}
                            >
                            </Badge>
                        </Grid>
                    </Grid>
            )}

        </>
    );
}

export default UsersContainer;