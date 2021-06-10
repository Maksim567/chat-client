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
        display: "inline-block",
        '& span': {
            display: 'block',
            fontSize: '.825rem',
            [theme.breakpoints.down('sm')]: {

            },
        },
        '& small': {
            display: 'block',
            fontSize: '.725rem',
            [theme.breakpoints.down('sm')]: {

            },
        }
    },
}));

export {useStyles};