import {calculateNewValue} from "@testing-library/user-event/dist/utils";

export const usersObj = {
    '0': 'Dimych',
    '1': 'Natasha',
    '2': 'Valera',
    '3': 'Katya'
}

type UsersType = {
    [key:string]: {id:number, name:string}
}

export const users:UsersType = {
    '101': {id: 101, name: 'Dimych'},
    '1212': {id: 1212, name: 'Natasha'},
    '3456': {id: 3456, name: 'Valera'},
    '1': {id: 1, name: 'Katya'},
}

// users[1]

const user= {id:100500, name:'Igor'}

users[user.id] = user
delete users[user.id]
users[user.id].name = 'Vitya'

export const usersArray = [
    {id: 101, name: 'Dimych'},
    {id: 1212, name: 'Natasha'},
    {id: 3456, name: 'Valera'},
    {id: 1324, name: 'Katya'},
]

