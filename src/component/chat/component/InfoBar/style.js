import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        borderBottom: '1px solid #dee6ed',
        padding: '1rem',
    },
    ContactBlock: {
        display: "block",
        marginLeft: '0.7rem',
        verticalAlign: 'top',
    },
    ContactName: {
        display: 'block',
        fontSize: "medium",
        fontFamily: 'sans-serif'
    },
    ContactTyping: {
        display: 'block',
        color: 'red',
        fontSize: 'small',
        fontFamily: 'sans-serif'
    }

});

export { useStyles };