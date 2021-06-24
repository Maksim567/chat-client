const fetchMessages = ({example}) => ([{id: 1, name: 'Oleg'}, {id: 2, name: 'Maksim'}], [{id: 3, name: 'test'}, {id: 4, name: 'test'}])


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