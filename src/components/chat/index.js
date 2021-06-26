import {useStyles} from "./style";
import {Grid, useTheme} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {usersRequested} from "../../redux/slices/users";
import map from "lodash/map";
import {useRouter} from "next/router";
import Link from 'next/link';
import Router from 'next/router'
import Home from "../../../pages";
import ActiveLink from "../../../pages";
import NextLink from 'next/link'
import NextRouter from 'next/router'
import Index from "../../../pages";

const ChatComponent = () => {

    const classes = useStyles();
    const theme = useTheme();

    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.collection);
    const isLoading = useSelector((state) => state.users.loading);

    useEffect(() => {
        dispatch(usersRequested({status: 'admin'}))
    }, [dispatch]);


    return (
        <>
            <Grid maxWidth="lg">
                <h2>Message</h2>
               <Grid container>
                   <Grid xs={3}>
                       {map(users, (user, index) =>(
                           <>
                               <NextLink href="/chat/id">{user.name}</NextLink>
                           </>
                       ))
                       }

                   </Grid>
                   <Grid xs={9}>
                       {/*<NextRouter path='/chat' component={Index}/>*/}

                   </Grid>
               </Grid>
            </Grid>
        </>

    )
        ;
};

export default ChatComponent;