import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    MessageBlock: {
        background: '#eff2f6',
        borderRadius: '3px',
        margin: '1rem',
        padding: '1rem',
    },
    MessageTitle: {
        fontWeight: 'bold',
        fontSize: 'medium',
    },

    MessageText: {
        fontSize: 'small',
    },
});

export { useStyles };