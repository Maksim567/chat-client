import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import PhoneIcon from "@material-ui/icons/Phone";
import VideocamIcon from "@material-ui/icons/Videocam";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const InfoBar = () => {
    return (
        <>
            <Grid item xs={9}>
                contact
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
        </>
    );
};

export default InfoBar;