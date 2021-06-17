import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        borderBottom: '1px solid #dee6ed',
        padding: '1rem',
        [theme.breakpoints.down('sm')]: {
         display: 'none',

        },
    },
    ContactBlock: {
        display: "block",
        marginLeft: '0.7rem',
        verticalAlign: 'top',
        '& span': {
            display: 'block',
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