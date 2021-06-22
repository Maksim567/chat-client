import React from 'react';
import { useRouter } from 'next/router'
import ChatField from "../../src/components/chat/components/ChatField";

const Id = () => {
    const router = useRouter()
    const { chat } = router.query

    return (<ChatField id={chat} pathname={router.pathname} />);
};

export default Id;
