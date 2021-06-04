import Grid from "@material-ui/core/Grid";
import Moment from "react-moment";
const dateToFormat = '1976-04-19T12:59-0500';

const Messages = () => {
    return (
        <>
            <Grid container spacing={1}>
                <Grid xs={10}>
                    <h1>You</h1>
                    <div>Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix.</div>
                </Grid>
                <Grid xs={2}>
                    <img src="" alt=""/>
                    <Moment>{dateToFormat}</Moment>
                </Grid>
            </Grid>
            <Grid container spacing={1}>
                <Grid xs={10}>
                    <h1>contact</h1>
                    <div>Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix.</div>
                </Grid>
                <Grid xs={2}>
                    <img src="" alt=""/>
                    <Moment>{dateToFormat}</Moment>
                </Grid>
            </Grid>
        </>
    );
};

export default Messages;