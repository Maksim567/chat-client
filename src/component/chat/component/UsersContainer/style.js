import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        borderRight: '1px solid #dee6ed',
    },
    InputRoot: {
        border: '1px solid #dee6ed',
        borderRadius: '.2rem',
        marginTop: '10px',
        marginLeft: '15px',

    },
    ContactBlock: {
        marginTop: '1rem',
        paddingLeft: '1rem',
    },
    ContactName: {
        display: 'block',
        fontSize: '.825rem',
    },
    ContactOnline: {
        display: 'block',
        fontSize: '.725rem',
    }
});

export {useStyles};