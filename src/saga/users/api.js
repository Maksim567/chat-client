// import {axiosClient} from "../api/api";
//
// const fetchUser = ({example}) => axiosClient().get('/api/v1/rooms.json')
//
// export {fetchUser}

const fetchUser = ({example}) => [
    {id: 1, name: 'Maksim'}, {id: 2, name: 'Oleg'}, {
        id: 3,
        name: 'test'
    },
]

export {fetchUser}

