import InputBase from "@material-ui/core/InputBase";
import Grid from "@material-ui/core/Grid";
import {Avatar, Badge, Typography} from "@material-ui/core";
import LensIcon from "@material-ui/icons/Lens";
import {useStyles} from "../UsersContainer/style";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {usersRequested} from "../../../../redux/slices/rooms";
import map from "lodash/map";
import Users from "../../../users";

const UsersContainer = ({rooms}) => {

    const classes = useStyles();

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
            {map(rooms, (room, index) => <Grid container className={classes.ContactBlock} key={index}>
                        <Grid xs={2}>
                            <Avatar alt="Remy Sharp" src={room.name}/>
                        </Grid>
                        <Grid xs={9}>
                            <span className={classes.ContactNames}>{room.name}</span>
                            <div className={classes.ContactSmall}>
                                <LensIcon color={user.color}/>
                                <small>{user.status}</small>
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