import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {useStyles} from "../InputComponent/style";

const InputComponent = () => {

    const classes = useStyles();

    return (
        <>
            <Grid container className={classes.root}>
                <Grid xs={10}>
                    <Input className={classes.InputBlock} placeholder="Type your message"/>
                </Grid>
                <Grid xs={1} className={classes.InputButton}>
                    <Button variant="contained" color="primary">Send</Button>
                </Grid>
            </Grid>
        </>
    );
};

export default InputComponent;