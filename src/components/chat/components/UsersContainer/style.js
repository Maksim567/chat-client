import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    MemberContainer: {
        outline: '1px solid #dee6ed',
    },
    MemberScroll: {
        height: '600px',
        overflow: 'auto',
        overflowX: 'hidden',
    }
}));

export {useStyles};