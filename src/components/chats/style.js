import {makeStyles} from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({

root: {
        backgroundColor: 'white',
        border: '1px solid #dee6ed',
        [theme.breakpoints.down('sm')]: {
            direction: "column",
            justify: "center",
            alignItems: "center",

        },
    },
    LeftMessages: {
        borderRight: '1px solid #dee6ed',
    }
/**/}));

export {useStyles};