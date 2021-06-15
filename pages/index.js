import Grid from "@material-ui/core/Grid";
import {Link} from "@material-ui/core";


export default function Home() {
    return (
        <>
            <Grid>
                <h1>Присоединяйся</h1>
<Grid><input placeholder="Имя" type="text"/></Grid>
                <Grid><input onChange={() => {}} placeholder="Комната" type="text"/></Grid>
            </Grid>
            <Grid>
                <Link
                    href="/chat"
                      >
                    <button>Вход</button>
                </Link>
            </Grid>

        </>
    )
}