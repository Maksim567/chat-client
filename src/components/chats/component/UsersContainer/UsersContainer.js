import InputBase from "@material-ui/core/InputBase";
import Grid from "@material-ui/core/Grid";
import {Avatar, Badge, Typography} from "@material-ui/core";
import LensIcon from "@material-ui/icons/Lens";
import {useStyles} from "../UsersContainer/style";
import React, {useEffect} from "react";
import map from "lodash/map";
import {Autocomplete} from "@material-ui/lab";

const UsersContainer = ({users}) => {

    const classes = useStyles();
    const options = ['Option 1', 'Option 2'];

    return (
        <>
            <Grid container xs={12}>
                <Autocomplete
                    id="custom-input-demo"
                    options={options}
                    renderInput={(params) => (
                        <div ref={params.InputProps.ref}>
                            <InputBase
                                placeholder="  search…"
                                inputProps={{'aria-label': 'search'}}
                                className={classes.InputRoot}
                                {...params.inputProps}
                                fullWidth
                            />
                        </div>
                    )}
                />

            </Grid>
            {map(users, (user, index) => <Grid container className={classes.ContactBlock} key={index}>
                        <Grid xs={2}>
                            <Avatar alt="Remy Sharp"/>
                        </Grid>
                        <Grid xs={9}>
                            <span className={classes.ContactNames}>{user.name}</span>
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