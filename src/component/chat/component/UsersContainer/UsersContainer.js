import InputBase from "@material-ui/core/InputBase";
import Grid from "@material-ui/core/Grid";
import {Avatar, Badge} from "@material-ui/core";
import LensIcon from "@material-ui/icons/Lens";
import {useStyles} from "../UsersContainer/style";

const UsersContainer = () => {

    const classes = useStyles();

    return (
        <>
            <Grid item xs={3} className={classes.root}>
                <Grid xs={11}>
                    <InputBase
                        placeholder="  search…"
                        inputProps={{'aria-label': 'search'}}
                        className={classes.InputRoot}
                        fullWidth
                    />
                </Grid>
                <Grid container className={classes.ContactBlock}>
                    <Grid xs={2}>
                        <Avatar alt="Remy Sharp" src="../images/avatar.jpeg"/>
                    </Grid>
                    <Grid xs={9}>
                        <span className={classes.ContactName}>Ashley Briggs</span>
                        <small className={classes.ContactOnline}><LensIcon fontSize="inherit"
                                                                           color="primary"/>онлайн</small>
                    </Grid>
                    <Grid xs={1}>
                        <Badge badgeContent={7} color="primary">
                        </Badge>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default UsersContainer;