import { useRouter } from 'next/router'
import Link from 'next/link'
import map from "lodash/map";
import {Grid} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {usersRequested} from "../../../src/redux/slices/users";
import NextLink from "next/link";

const Post = () => {
    const router = useRouter()
    const { id } = router.query

    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.collection);
    const isLoading = useSelector((state) => state.users.loading);

    useEffect(() => {
        dispatch(usersRequested({status: 'admin'}))
    }, [dispatch]);


    useEffect( () => {
        // Prefetch the dashboard page
        console.log(router)
    }, [router])

    console.log(Link)


    return (
        <>
            <h1>Post: {id}</h1>
                <Grid container>
                    <Grid xs={3}>
                        {map(users, (user, index) =>(
                            <>
                                <NextLink href="/chat/[id]" as={`/chat/$id`}>{user.name}</NextLink>
                            </>
                        ))
                        }
                    </Grid>
                    <Grid xs={9}>
                        <Switch>
                            <Route path="/" exact component={Index} />
                            <Route path="/about/" component={About} />
                            <Route path="/users/" component={Users} />
                            <Redirect from="/people/" to="/users/" />
                            <Route component={NotFound}/>
                        </Switch>
                    </Grid>

                </Grid>
        </>
    )
}

export default Post