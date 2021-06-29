import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    MessagesContainer: {
        minHeight: '500px',
        overflow: 'auto',
        overflowX: 'hidden',
    }
}));

export {useStyles};