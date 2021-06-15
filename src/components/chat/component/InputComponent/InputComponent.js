import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {useStyles} from "../InputComponent/style";
import {useTheme} from "@material-ui/core/styles";

const InputComponent = ({message, setMessage, sendMessage}) => {

    const classes = useStyles();
    const theme = useTheme();

    return (
        <>
            <Grid container className={classes.root}>
                <Grid xs={8} xl={10}>
                    <Input className={classes.InputBlock} placeholder="Type your message"/>
                </Grid>
                <Grid xs={1} xl={1}>
                    <Button variant="contained" color="primary">Send</Button>

                </Grid>
            </Grid>
        </>
    );
};

export default InputComponent;