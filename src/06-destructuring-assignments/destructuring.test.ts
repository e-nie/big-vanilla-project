import {ManType} from "./Destructuring";


let props: ManType

beforeEach(() => {
    props = {
        name: 'Evchen',
        age: 32,
        lessons: [{title: '1'}, {title: '2'},{title: '3', name:'react'} ],
        address: {
            street: {
                title: 'Independence Str.'
            }
        }
    }
})


test('', () => {
    let props = {
        name: 'Evchen',
        age: 32,
        lessons: [{title: '1'}, {title: '2'}],
        address: {
            street: {
                title: 'Independence Str.'
            }
        }
    }

    // const age = props.age
    // const lessons = props.lessons

    const {age, lessons} = props
    const {title} = props.address.street


    expect(age).toBe(32)
    expect(lessons.length).toBe(2)
    expect(title).toBe('Independence Str.')
})


test('1', () => {
    const l1 = props.lessons[0]
    const l2 = props.lessons[1]

    const [ls1]= props.lessons
    const [, ls2, ...restLessons] = props.lessons


    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')

    expect(ls1.title).toBe('1')
    expect(ls2.title).toBe('2')

    expect(restLessons[0]).toStrictEqual({title: '3', name:'react'})

})
