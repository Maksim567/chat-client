import styles from "../chat/chat.module.css";
import Grid from '@material-ui/core/Grid';
import PhoneIcon from '@material-ui/icons/Phone';
import Button from '@material-ui/core/Button';
import VideocamIcon from '@material-ui/icons/Videocam';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Input from '@material-ui/core/Input';

const Chat = () => {
    return (
        <div className={styles.container}>
            <h2>Messages</h2>
            <Grid container item xs={12}>
                <Grid item xs={2}>
                    <Input color="secondary"/>
                    <div>
                        contact
                    </div>
                </Grid>
                <Grid container item xs={10}>
                    <Grid item xs={9}>
                        ffsfdfs
                    </Grid>
                    <Grid item container spacing={2} xs={3}>
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
                    <Grid container spacing={1}>
                        <Grid xs={10}>
                            <h1>You</h1>
                            <div>Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix.</div>
                        </Grid>
                        <Grid xs={2}>
                            <img src="" alt=""/>
                            <p>time</p>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1}>
                        <Grid xs={10}>
                            <h1>contact</h1>
                            <div>Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix.</div>
                        </Grid>
                        <Grid xs={2}>
                            <img src="" alt=""/>
                            <p>time</p>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid xs={10}>
                            <Input fullWidth></Input>
                        </Grid>
                        <Grid xs={2}>
                            <Button variant="contained" color="primary">Send</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Chat;