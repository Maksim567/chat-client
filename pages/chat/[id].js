import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/router'
import {usersRequested} from "../../src/redux/slices/users";
import {useDispatch, useSelector} from "react-redux";
import Grid from "@material-ui/core/Grid";
import Link from 'next/link';
import {messagesRequested} from "../../src/redux/slices/messages";


const Id = () => {
        const router = useRouter()
        const id = router.query;
        console.log(id);

        const dispatch = useDispatch();
        const users = useSelector((state) => state.users.collection);
        const messages = useSelector((state) => state.messages.collection);
        const isLoading = useSelector((state) => state.users.loading);


        useEffect(() => {
            dispatch(usersRequested({status: 'admin'}))
            dispatch(messagesRequested({status: 'admin'}))
        }, [dispatch]);


        return (
            <>
                <Grid container>
                    <Grid xs={2}>
                        <p>Имя: {id.id}</p>
                        <p>Пользователь: {id.name}</p>
                        <p>Комната: {id.room}</p>
                    </Grid>
                    <Grid xs={3}>
                        {users.map((user, index) => (
                            <div key={index}>
                                <Link href={`/chat/im?name=${user.name}&room=${user.id}`}
                                      as={`/chat/im?name=${user.name}&room=${user.id}`}>
                                    {user.name}
                                </Link>
                            </div>
                        ))}
                    </Grid>
                    <Grid xs={5}>
                        {users.map((messages, index) => (
                            <div key={index}>
                                {messages.name}
                            </div>
                        ))}

                        {/*<input*/}
                        {/*    className="input"*/}
                        {/*    type="text"*/}
                        {/*    placeholder="Введите сообщение..."*/}
                        {/*    value={message}*/}
                        {/*    onChange={e => setMessage(e.target.value)}*/}
                        {/*/>*/}
                        {/*<button className="sendButton" onClick={() => setMessages([...messages, message])}>Отправить*/}
                        {/*</button>*/}
                        {/*<div>*/}
                        {/*    {messages.map((message, index) => (*/}
                        {/*        <div key={index}>*/}
                        {/*            {message}*/}
                        {/*        </div>*/}
                        {/*    ))}*/}
                        {/*</div>*/}

                    </Grid>
                </Grid>

            </>);
    }
;

export default Id;
