import React, {useState} from 'react';
import Link from 'next/link';

function Index(props) {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
            <div className="joinOuterContainer">
                <div className="joinInnerContainer">
                    <h1 className="heading">Присоединяйтесь</h1>
                    <div><input placeholder="Имя" className="joinInput" type="text"
                                onChange={(event) => setName(event.target.value)}/></div>
                    <div><input placeholder="Комната" className="joinInput mt-20" type="text"
                                onChange={(event) => setRoom(event.target.value)}/></div>
                    <Link onClick={event => (!name || !room) && event.preventDefault()}
                          href={`/chat?name=${name}&room=${room}`}>
                        <button className="button mt-20" type="submit">Вход</button>
                    </Link>
                </div>
            </div>
    );
}

export default Index;

