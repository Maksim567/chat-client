import React from 'react';
import Grid from "@material-ui/core/Grid";
import {Avatar, Badge} from "@material-ui/core";
import LensIcon from "@material-ui/icons/Lens";
import {useStyles} from "./style";
import {useRouter} from "next/router";
import Link from 'next/link';


function User({user}) {

    const classes = useStyles();

    const router = useRouter()

    return (
        <Link href={`/chat/?chat=${user.id}`} as={`/chat/${user.id}`}>
            <a>
                <Grid container justify="center">
                    {[0, 1, 2].map((value) => (
                        <Grid key={value} item>
                        1
                        </Grid>
                    ))}
                </Grid>

                <Grid container className={classes.MemberItem}>
                    <Grid xs={2}>
                        <Avatar alt="Remy Sharp" src={user.picture}/>
                    </Grid>
                    <Grid spacing={2} xs={8}>
                        <span>{user.name}</span>
                        <Grid xs={12}>
                            <LensIcon fontSize="small" color="primary"/>
                            <small>online</small>
                        </Grid>
                    </Grid>
                    <Grid xs={1}>
                        <Badge anchorOrigin={{
                            vertical: 'center',
                            horizontal: 'center',
                        }}

                               classes={{badge: classes.badge}}
                               badgeContent={user.badgeContent}
                               badgeContent={4}

                        >
                        </Badge>
                    </Grid>
                </Grid>


            </a>
        </Link>
    );
}

export default User;