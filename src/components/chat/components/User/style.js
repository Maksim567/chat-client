import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    badge: {
        background: '#4bbf73',
        color: 'white',
        borderRadius: '3px'
    },
    MemberItem: {
        margin: '0.4rem 0'
    },
    Member: {
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
    },
    MemberStatusOnline: {
        marginTop: '5px',
        marginRight: '5px',
        background: '#71cc90',
        borderRadius: '50%',
        height: '0.5em',
        width: '0.5em'
    },
    MemberStatusOffline: {
        background: 'red',
        borderRadius: '50%',
        height: '0.5em',
        width: '0.5em'
    },
    MemberBadge: {
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
    }
}));

export {useStyles};