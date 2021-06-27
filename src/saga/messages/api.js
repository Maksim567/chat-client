import {find} from "lodash";
import {MessagesUser2} from "./2/api";
import {MessagesUser1} from "./1/api";
import {MessagesUser3} from "./3/api";

const fetchMessages = (example) => ([find([MessagesUser1, MessagesUser2, MessagesUser3], example)])


export {fetchMessages}


// a[[
//     {messageId: '1', userId: "1", senderName: 'Maksim', messageText: 'test', createAt: '12:00'},
//     {messageId: '1', userId: "1", senderName: 'Oleg', messageText: 'test', createAt: '12:10'},
//     {messageId: '1', userId: "1", senderName: 'Maksim', messageText: 'test', createAt: '12:20'},
// ], [
//     {messageId: '2', userId: "2", senderName: 'Maksim1', messageText: 'tefsdfsst', createAt: '12:00'},
// ], [
//     {messageId: '3', userId: "1", senderName: 'Maksim2', messageText: 'test', createAt: '12:00'},
//     {messageId: '1', userId: "1", senderName: 'Oleg', messageText: 'test', createAt: '12:10'},
//     {messageId: '1', userId: "1", senderName: 'Maksim', messageText: 'test', createAt: '12:20'},
// ]
//     ]
// const fetchMessages = ({ example }) =>[
//     a:{{user: '1'}}
// ]