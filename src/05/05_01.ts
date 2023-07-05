export type PersonType = {
    name: string
    age: number
}

const people:Array<PersonType> = [
    {name: 'Ann Smith', age: 33},
    {name: 'Emma Soyer', age: 25},
    {name: 'Irene Sui', age: 22},
]

const dimychTransformator = (person: PersonType) => ({
        stack: ['css', 'html', 'js', 'tdd', 'react'],
        firstName: person.name.split(' ')[0],
        lastName: person.name.split(' ')[1]
    }
)

const devs = [
    {
        stack: ['css', 'html', 'js', 'tdd', 'react'],
        firstName: 'Ann', lastName: 'Smith'
    },
    {
        stack: ['css', 'html', 'js', 'tdd', 'react'],
        firstName: 'Emma', lastName: 'Soyer'
    },
    {
        stack: ['css', 'html', 'js', 'tdd', 'react'],
        firstName: 'Irene', lastName: 'Sui'
    },
]


let d1 = dimychTransformator(people[0])
let d2 = dimychTransformator(people[1])
let d3 = dimychTransformator(people[2])

const dev2 = [
    dimychTransformator(people[0]),
    dimychTransformator(people[1]),
    dimychTransformator(people[2])
]


const devs3 = people.map(dimychTransformator)
const devs4 = people.map(person => ({
        stack: ['css', 'html', 'js', 'tdd', 'react'],
        firstName: person.name.split(' ')[0],
        lastName: person.name.split(' ')[1]
    })
)

const  messages = people.map(person=> `Hello, ${person.name.split(' ')[0]}. Welcome to IT-Incubator!`)

export const createGreetingMessage = (people:Array<PersonType>) => {
    return people.map(person=> `Hello, ${person.name.split(' ')[0]}. Welcome to IT-Incubator!`)
}
