// cart 
//     id: number
//     title: string
//     description: string
//     userId: number
//     columnId: number

// colum
// id: number
// name: string
// order: number

// user
//     id: number
//     name: string
//     email: string
//     photoUrl: string

const GET_CARDS_RESPONSE = [
    {
        id: 1,
        title: 'create menu',
        description: 'need create flex menu',
        userId: 2,
        columnId: 1
    },
    {
        id: 2,
        title: 'change background',
        description: 'please, change background to red',
        userId: 1,
        columnId: 17
    }
];

const GET_COLUMNS_RESPONSE = [
    {
        id: 1,
        name: 'todo',
        order: 1
    },
    {
        id: 17,
        name: 'dev',
        order: 2
    },
    {
        id: 23,
        name: 'qa',
        order: 3
    },
    {
        id: 65,
        name: 'done',
        order: 4
    },
]

const GET_USERS_RESPONSE = [
    {
        id: 1,
        name: 'Vicktor',
        email: 'wef@we.ru',
        photoUrl: 'dsfdsfsdf.com'
    },
    {
        id: 2,
        name: 'Vova',
        email: 'wqweef@we.ru',
        photoUrl: 'dsfdsfsdf.com'
    },
]