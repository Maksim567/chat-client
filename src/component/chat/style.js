import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        backgroundColor: 'white',
        border: '1px solid #dee6ed',
        padding: '0.7em',
    },
    InputRoot: {
        border: '1px solid #dee6ed',
        borderRadius: '.2rem',
        marginTop: '10px',
        marginLeft: '5px'
    },
    ContactBlock: {
        marginTop: '10px',
    },
    ContactName: {
        display: 'block',
        fontSize: '.825rem'
    },
    ContactOnline: {
        display: 'block',
        verticalAlign: 'top',
        fontSize: '.725rem',
    },
    ContactIcon: {
        color: 'white',
        vertical: 'center',
        horizontal: 'center',
    },
    MessageBlock: {
        display: "inline-block",
        textAlign: '',
        background: '#eff2f6',
    },
});

export { useStyles };