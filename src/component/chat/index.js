import Grid from '@material-ui/core/Grid';
import {Container} from "@material-ui/core";
import {useStyles} from './style';
import UsersContainer from "./component/UsersContainer/UsersContainer";
import InfoBar from "./component/InfoBar/InfoBar";
import Message from "./component/Message/Message";
import InputComponent from "./component/InputComponent/InputComponent";
import List from "./component/test/list";

const ChatComponent = () => {

    const classes = useStyles();

    return (
        <>
            <Container maxWidth="lg">
                <h2>Messages</h2>
                <Grid container className={classes.root}>
                    <UsersContainer/>
                    <Grid container item xs={9}>
                            <InfoBar/>
                            <Message/>
                            <InputComponent/>
                            <List/>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default ChatComponent;