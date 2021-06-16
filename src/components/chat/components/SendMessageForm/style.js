import {makeStyles} from '@material-ui/core/styles';
import SendMessageForm from "./SendMessageForm";

const useStyles = makeStyles((theme) => ({
    SendMessageForm: {
        borderTop: '1px solid #dee6ed',
        padding: '1em'
    }
}));

export {useStyles};