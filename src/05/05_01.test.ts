import {createGreetingMessage, PersonType} from "./05_01";

let people: Array<PersonType> = [
    {name: 'Ann Smith', age: 33},
    {name: 'Emma Soyer', age: 25},
    {name: 'Irene Sui', age: 22},
]

beforeEach(() => {
    let people: Array<PersonType> = [
        {name: 'Ann Smith', age: 33},
        {name: 'Emma Soyer', age: 25},
        {name: 'Irene Sui', age: 22},
    ]
})


test('should get array of greeting messages', () => {
    const messages = createGreetingMessage(people)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe('Hello, Ann. Welcome to IT-Incubator!')
    expect(messages[1]).toBe('Hello, Emma. Welcome to IT-Incubator!')
    expect(messages[2]).toBe('Hello, Irene. Welcome to IT-Incubator!')
})
