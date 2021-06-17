import {axiosClient} from "../api/api";

const fetchUser = ({example}) => axiosClient().get('/api/v1/rooms.json')

export {fetchUser}

// const fetchUser = ({example}) => [
//
//             {
//                 name: 'Maksim',
//                 messages: {
//                     content: "test",
//                     date: "12.00"
//                 }
//             },
//             {
//                 name: 'oleg',
//                 messages: {
//                     content: "test1",
//                     date: "12.00"
//                 },
//             },
//             {
//                 name: 'oleg',
//                 messages: {
//                     content: "test1",
//                     date: "12.00"
//                 },
//             }
// ]
//
// export {fetchUser}

// {id: 1, name: 'Maksim'},
// {id: 2, name: 'Oleg'}