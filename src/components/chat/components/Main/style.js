import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    Main: {
        margin: '0 auto',
        background: "white",
        border: '1px solid #dee6ed',
        boxShadow: '4px 3px 9px 0px rgba(34, 60, 80, 0.2)',
        webkitBoxShadow: '4px 3px 9px 0px rgba(34, 60, 80, 0.2)',
        mozBoxShadow: '4px 3px 9px 0px rgba(34, 60, 80, 0.2)'
    }
}));

export {useStyles};