import {makeStyles} from '@material-ui/core/styles';
import Index from "./index";

const useStyles = makeStyles((theme) => ({
    MemberSearch: {
        marginTop: '0.5rem',
        padding: '0 0.5rem'
    },
    MemberInput: {
        border: '1px solid #ced4da',
        borderRadius: '3px',
        padding: '0 .7rem'
    }
}));

export {useStyles};