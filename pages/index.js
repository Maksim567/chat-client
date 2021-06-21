import React from 'react';
import Link from 'next/link'

function Index(props) {

    return <div>
        <Link href="/chat/[id]" as="/chat/rooms">
            <a>Chat</a>
        </Link>
    </div>
}

export default Index;

