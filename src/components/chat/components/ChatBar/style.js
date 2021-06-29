import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    ChatList: {
        borderBottom: '1px solid #ced4da',
    },
    root: {
        '& > *': {
            margin: theme.spacing(1),
        }
    }
}));

export {useStyles};

