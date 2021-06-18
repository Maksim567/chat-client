import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    MessagesContainer: {
        height: '500px',
        overflow: 'auto',
        overflowX: 'hidden',
    }
}));

export {useStyles};