// import {axiosClient} from "../api/api";
//
// const fetchUser = ({example}) => axiosClient().get('/api/v1/rooms.json')
//
// export {fetchUser}

const fetchUser = ({example}) => [
    {id: 1, title: 'Maksim'}, {id: 2, title: 'Oleg'}, {
        id: 3,
        title: 'test'
    },
]

export {fetchUser}

