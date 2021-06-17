import Grid from "@material-ui/core/Grid";
import {Link} from "@material-ui/core";

export default function Home() {

    return (
        <>
            <Grid>
                <h1>Присоединяйся</h1>

            </Grid>
        </>
    )
}


{/*<div><input placeholder="Имя" className="joinInput" type="text"*/}
{/*            onChange={(event) => setName(event.target.value)}/></div>*/}
{/*<div><input placeholder="Комната" className="joinInput mt-20" type="text"*/}
{/*            onChange={(event) => setRoom(event.target.value)}/></div>*/}
{/*<Link onClick={event => (!name || !room) && event.preventDefault()}*/}
{/*      to={`/chat?name=${name}&room=${room}`}*/}
{/*>*/}
{/*    <button className="button mt-20" type="submit">Вход</button>*/}
{/*</Link>*/}