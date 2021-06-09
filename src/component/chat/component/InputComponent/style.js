import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        padding: '1rem',
        borderTop: '1px solid #dee6ed',

    },
    InputBlock: {
        border: '1px solid #dee6ed',
        width: '100%',
        fontSize: 'small',
        padding: '5px 10px',

    },
    InputButton: {
        marginLeft: '2rem',
    }
});

export { useStyles };