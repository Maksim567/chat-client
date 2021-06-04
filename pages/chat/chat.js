import styles from "../chat/chat.module.css";
import Grid from '@material-ui/core/Grid';
import Messages from "../../components/messages";
import InputMessage from "../../components/InputMessage";
import InfoBar from "../../components/InfoBar";
import Contact from "../../components/Contact";
import {Container} from "@material-ui/core";

const Chat = () => {
    return (
        <>
            <Container style={{backgroundColor: '#cfe8fc'}} maxWidth="lg">
                <h2>Messages</h2>
                <Grid container>
                <Contact/>
                <Grid container item xs={10}>
                    <InfoBar/>
                    <Messages/>
                    <InputMessage/>
                </Grid>
            </Grid>
            </Container>
        </>
    );
};

export default Chat;