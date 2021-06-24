// import {axiosClient} from "../api/api";
//
// const fetchUser = ({example}) => axiosClient().get('/api/v1/rooms.json')
//
// export {fetchUser}

const fetchRooms = ({ example}) => [
    {id: 1, title: 'Maksim', src: '../images/avatar.jpeg', is_status: true}, {
        id: 2,
        title: 'Oleg',
        src: '../images/avatar2.jpg',
        is_status: false
    }, {
        id: 3,
        title: 'test', src: '../images/avatar.jpeg', is_status: false
    },
]

export {fetchRooms}

