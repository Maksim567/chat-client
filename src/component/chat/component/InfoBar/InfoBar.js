import Grid from "@material-ui/core/Grid";
import {Avatar} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import PhoneIcon from "@material-ui/icons/Phone";
import VideocamIcon from "@material-ui/icons/Videocam";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import {useStyles} from "../InfoBar/style";

const InfoBar = () => {

    const classes = useStyles();

    return (
        <>
            <Grid container className={classes.root}>
                <Grid container item xs={9}>
                    <Grid container>
                        <Avatar alt="Remy Sharp" src="../images/avatar.jpeg"/>
                        <div className={classes.ContactBlock}>
                        <span className={classes.ContactName}>Ashley Briggs
                        </span>
                            <small className={classes.ContactTyping}>Typing...</small>
                        </div>
                    </Grid>
                </Grid>
                <Grid item container spacing={1} xs={3}>
                    <Grid item>
                        <Button variant="contained" color="primary">
                            <PhoneIcon/>
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="secondary">
                            <VideocamIcon/>
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained">
                            <MoreHorizIcon/>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default InfoBar;