import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({

    Message: {
        padding: '1.5rem',
        justifyContent: 'flex-end',
    },
    MessageView: {
        padding: '1rem',
        justifyContent: 'flex-start',
    },
    MessageBlock: {
        background: '#eff2f6',
        borderRadius: '3px',
        padding: '0.5rem',
        marginBottom: '1rem',
        '& span': {
            fontWeight: 'bold',
            fontSize: 'small',
            fontFamily: 'sans-serif',
            color: '#6c757d',
        },
        '& div': {
            fontSize: 'small',
            fontFamily: 'sans-serif',
            color: '#6c757d',
        }
    },
    MessageImg: {
        marginLeft: '0.7rem',
        '& span': {
            fontSize: 'small',
            fontFamily: 'sans-serif',
            color: '#6c757d',
        }
    },
});

export {useStyles};