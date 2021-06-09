import Grid from "@material-ui/core/Grid";
import {useStyles} from "../Message/style";
import {Avatar} from "@material-ui/core";

const Message = () => {

    const classes = useStyles();

    return (
        <>
            <Grid container className={classes.root}>
                <Grid container>
                    <Grid className={classes.MessageBlock}>
                        <span className={classes.MessageTitle}>You</span>
                        <div className={classes.MessageText}>Lorem ipsum dolor sit amet, vis erat denique in, dicunt
                            prodesset te vix.
                        </div>
                    </Grid>
                    <Grid className={classes.MessageImg}>
                        <Avatar alt="Remy Sharp" src="../images/avatar.jpeg"/>
                        <span className={classes.MessageTime}>2:37 am</span>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid className={classes.MessageBlock}>
                        <span className={classes.MessageTitle}>Contact</span>
                        <div className={classes.MessageText}>Lorem ipsum dolor sit amet, vis erat deniqu</div>
                    </Grid>
                    <Grid className={classes.MessageImg}>
                        <Avatar alt="Remy Sharp" src="../images/avatar.jpeg"/>
                        <span className={classes.MessageTime}>2:37 am</span>
                    </Grid>
                </Grid>
            </Grid>

        </>
    );
};

export default Message;