import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    InputRoot: {
        border: '1px solid #dee6ed',
        borderRadius: '.2rem',
        marginTop: '.5rem',
        marginLeft: '.4rem',
        marginRight: '.4rem',
        fontSize: 'small',
        width: '100%'
    },
    ContactBlock: {
        marginTop: '1rem',
        paddingLeft: '1rem',
    },
    ContactNames: {
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
            fontSize: '.825rem',
            [theme.breakpoints.down('sm')]: {},
    },
    ContactSmall: {

        display: "flex",
        alignItems: 'start',

        '& svg': {
            fontSize: '.725rem',
            color: '#71cc90'
        },
        '& small': {
            fontSize: 'x-small',
            [theme.breakpoints.down('sm')]: {},
        },
    },
    badge: {
        background: '#4bbf73',
        color: 'white',
        borderRadius: '3px'
    }
}));

export {useStyles};