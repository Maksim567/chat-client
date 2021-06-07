import Grid from '@material-ui/core/Grid';
import {Avatar, Badge, Container, GridList} from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import PhoneIcon from "@material-ui/icons/Phone";
import VideocamIcon from "@material-ui/icons/Videocam";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Moment from "react-moment";
import Input from "@material-ui/core/Input";
import {useStyles} from './style';
import LensIcon from '@material-ui/icons/Lens';

const dateToFormat = '1976-04-19T12:59-0500';

const ChatComponent = () => {

    const classes = useStyles();

    return (
        <>
            <Container maxWidth="lg">
                <h2>Messages</h2>
                <Grid container className={classes.root}>
                    <Grid item className={classes.root} xs={2}>
                        <InputBase
                            placeholder="  search…"
                            inputProps={{ 'aria-label': 'search' }}
                            className={classes.InputRoot}
                        />
                        <Grid container className={classes.ContactBlock}>
                            <Grid xs={3}>
                                <Avatar alt="Remy Sharp" src="../images/avatar.jpeg"/>
                            </Grid>
                            <Grid xs={8}>
                            <span className={classes.ContactName}>Ashley Briggs</span>
                            <small className={classes.ContactOnline}><LensIcon fontSize="inherit" color="primary"/>онлайн</small>
                            </Grid>
                            <Grid xs={1}>
                            <Badge badgeContent={4} color="primary" className={classes.ContactIcon}>
                                </Badge>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container item xs={10} >
                        <Grid container className={classes.root}>
                            <Grid container item xs={9}>
                                <Avatar alt="Remy Sharp" src="../images/avatar.jpeg"/>
                                <Grid>
                                    <span>Ashley Briggs</span>
                                </Grid>
                            </Grid>
                            <Grid item container spacing={2} xs={3}>
                            <Grid item>
                                <Button size="medium" variant="contained" color="primary">
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
                        <Grid container className={classes.root}>
                        <Grid container>
                            <Grid xs={10}>
                                <div className={classes.MessageBlock}>
                                <h1>You</h1>
                                <span>Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix.</span>
                                </div>
                            </Grid>
                            <Grid xs={2}>
                                <img src="" alt=""/>
                                <Moment>{dateToFormat}</Moment>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid xs={10}>
                                <h1>contact</h1>
                                <div>Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix.</div>
                            </Grid>
                            <Grid xs={2}>
                                <img src="" alt=""/>
                                <Moment>{dateToFormat}</Moment>
                            </Grid>
                        </Grid>

                        </Grid>
                        <Grid container className={classes.root}>
                                <Input className={classes.InputRoot}/>
                                <Button variant="contained" color="primary">Send</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default ChatComponent;