import List from "./component/List";
import {Provider} from "react-redux";
import {store} from "./store/store";

const ListComponent = () => {
    return (
        <>
            <Provider store={store}>
               <List/>
            </Provider>
        </>
    );
};

export default ListComponent;