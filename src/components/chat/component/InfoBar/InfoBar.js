import Grid from "@material-ui/core/Grid";
import {Avatar} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import PhoneIcon from "@material-ui/icons/Phone";
import VideocamIcon from "@material-ui/icons/Videocam";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import {useStyles} from "../InfoBar/style";
import {useTheme} from "@material-ui/core/styles";

const InfoBar = () => {

    const classes = useStyles();
    const theme = useTheme();
    
    return (
        <>
            <Grid container className={classes.root}>
                <Grid container xs={6} xl={9}>
                    <Avatar alt="Remy Sharp" src="../images/avatar.jpeg"/>
                    <div className={classes.ContactBlock}>
                        <span>Ashley Briggs</span>
                        <small>Typing...</small>
                    </div>
                </Grid>
                <Grid container spacing={1} xs={6} xl={3} className={classes.ContactButton}>
                    <Grid item xs={4}>
                        <Button variant="contained" color="primary">
                            <PhoneIcon/>
                        </Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button variant="contained" color="secondary">
                            <VideocamIcon/>
                        </Button>
                    </Grid>
                    <Grid item xs={4}>
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