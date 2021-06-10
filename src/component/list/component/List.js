import { useDispatch, useSelector } from "react-redux";

export default function List() {
    const data = useSelector((state) => state.getData.userData);
    const dispatch = useDispatch();

    const callAPI = () => {
        dispatch({ type: "GET_USERS_REQUEST" });
    };

    const printUsers = (data) => {
        if (data) {
            return data.map(({ id, title }) => <li key={id}>{title}</li>);
        }

        return null;
    };


    return (
        <div className="App">
            <h1>Hello</h1>
            <button onClick={callAPI}>Click me!</button>
            <ul style={{ listStyleType: "none" }}>{printUsers(data)}</ul>
        </div>
    );
}