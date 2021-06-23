import React, {useState} from 'react';
import Link from 'next/link';

function Index(props) {

    const [name, setName] = useState('');

    return (
            <div className="joinOuterContainer">
                <div className="joinInnerContainer">
                    <h1 className="heading">Присоединяйтесь</h1>
                    <div><input placeholder="Имя" className="joinInput" type="text"
                                onChange={(event) => setName(event.target.value)}/></div>
                    <Link onClick={event => (!name) && event.preventDefault()}
                          href={`/chat?name=${name}`}>
                        <button className="button mt-20" type="submit">Вход</button>
                    </Link>
                </div>
            </div>
    );
}

export default Index;

