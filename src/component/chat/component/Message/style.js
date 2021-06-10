import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({

    root: {
        margin: '1rem',
    },
    MessageBlock: {
        background: '#eff2f6',
        borderRadius: '3px',
        padding: '1rem',
        marginBottom: '1rem',
        '& span': {
            fontWeight: 'bold',
            fontSize: 'medium',
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
            fontSize: 'x-small',
            fontFamily: 'sans-serif',
            color: '#6c757d',
        }
    },
});

export {useStyles};