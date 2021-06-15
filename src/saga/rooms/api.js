import {axiosClient} from "../api/api";

const fetchRooms = ({example}) => {
//     // [{id: 1, name: 'Oleg'}, {id: 2, name: 'Maksim'}]
   axiosClient().get('/api/v1/rooms.json')
 }


export {fetchRooms}
