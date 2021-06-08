import Grid from "@material-ui/core/Grid";
import Moment from "react-moment";
import {useStyles} from "../Message/style";
import {Avatar} from "@material-ui/core";
import {useState} from "react";


const Message = () => {

    const classes = useStyles();

    return (
        <>
            <Grid container>
                <Grid container>
                    <Grid className={classes.MessageBlock}>
                        <span className={classes.MessageTitle}>You</span>
                        <div className={classes.MessageText}>Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix.</div>
                    </Grid>
                    <Grid xs={2}>
                        <Avatar alt="Remy Sharp" src="../images/avatar.jpeg"/>
                        <Moment/>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid className={classes.MessageBlock}>
                        <span className={classes.MessageTitle}>Contact</span>
                        <div className={classes.MessageText}>Lorem ipsum dolor sit amet, vis erat deniqu</div>
                    </Grid>
                    <Grid xs={2}>
                        <Avatar alt="Remy Sharp" src="../images/avatar.jpeg"/>
                        <Moment/>
                    </Grid>
                </Grid>
            </Grid>

        </>
    );
};

export default Message;