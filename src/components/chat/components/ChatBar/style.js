import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    ChatBar: {
        borderBottom: '1px solid #dee6ed',
        padding: '1rem',

    },
    ChatBarButton: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    ContactBlock: {
        marginLeft: '0.7rem',
        verticalAlign: 'top',
        '& span': {

            fontSize: "medium",
            fontFamily: 'sans-serif',
        },
        '& small': {
            display: 'block',
            color: 'red',
            fontSize: 'small',
            fontFamily: 'sans-serif',
        }
    },
    ContactButton: {
        direction: 'row',
    }
}));

export {useStyles};