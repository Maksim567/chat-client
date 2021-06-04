import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

const InputMessage = () => {
    return (
        <>
            <Grid container>
                <Grid xs={10}>
                    <Input fullWidth></Input>
                </Grid>
                <Grid xs={2}>
                    <Button variant="contained" color="primary">Send</Button>
                </Grid>
            </Grid>
        </>
    );
};

export default InputMessage;