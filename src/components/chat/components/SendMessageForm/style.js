import {makeStyles} from '@material-ui/core/styles';
import SendMessageForm from "./SendMessageForm";

const useStyles = makeStyles((theme) => ({
    SendMessageForm: {
        borderTop: '1px solid #dee6ed',
        padding: '1em'
    },
    SendMessageInput: {
        border: '1px solid #ced4da',
        borderRadius: '3px',
        padding: '0 .7rem'
    }
}));

export {useStyles};