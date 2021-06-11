import InputBase from "@material-ui/core/InputBase";
import Grid from "@material-ui/core/Grid";
import {Avatar, Badge, Typography} from "@material-ui/core";
import LensIcon from "@material-ui/icons/Lens";
import {useStyles} from "../UsersContainer/style";

const UsersContainer = () => {

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
            <Grid container className={classes.ContactBlock}>
                <Grid xs={2}>
                    <Avatar alt="Remy Sharp" src="../images/avatar.jpeg"/>
                </Grid>
                <Grid xs={9}>
                    <span className={classes.ContactNames}>Ashley Briggs</span>
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
                           badgeContent="4"
                    >
                    </Badge>
                </Grid>
            </Grid>
        </>
    );
}

export default UsersContainer;