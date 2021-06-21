import {axiosClient} from "../api/api";

const fetchUser = ({example}) => axiosClient().get('/api/v1/rooms.json')

export {fetchUser}

// const fetchUser = ({example}) => [
//     {id: 1, name: 'Maksim', message: 'ffff'}, {id: 2, name: 'Oleg'}
// ]
//
// export {fetchUser}

