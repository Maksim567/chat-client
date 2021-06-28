import {filter} from "lodash";

const rooms =
    [
        {
            id: '1', name: "you", messageText: 'test', createAt: '12:00',
        }, {
        id: '1', name: "you", messageText: 'test', createAt: '12:00',
    }, {
        id: '1', name: "you", messageText: 'test', createAt: '12:00',
    },
        {id: '2', name: "maksim", messageText: 'test1', createAt: '12:00',},
        {id: '3', name: "test", messageText: 'test2', createAt: '12:00'}
    ]

const fetchMessages = (example) => (filter(rooms, example))


export {fetchMessages}
