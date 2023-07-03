import {findAllByAltText} from "@testing-library/react";

test('should take all men older than 90', () => {
    const ages = [18.20, 22, 1, 100, 90, 14]

    // const predicate = (age: number) =>  age > 90

    const oldAges = ages.filter(age => age > 90)

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})

test('should take all courses cheaper than 160', () => {

    const courses = [
        {title: 'css', price: 100},
        {title: 'js', price: 200},
        {title: 'react', price: 150},
    ]


    const cheapCourses = courses.filter(course => course.price < 160)


    expect(cheapCourses.length).toBe(2)
    expect(cheapCourses[0].title).toBe('css')
    expect(cheapCourses[1].title).toBe('react')
})


test('get only uncompleted tasks', () => {
    const tasks = [
        {id: 1, title: 'bread', isDone: false},
        {id: 2, title: 'milk', isDone: true},
        {id: 3, title: 'eggs', isDone: false},
        {id: 4, title: 'honey', isDone: true},
    ]

const completedTasks = tasks.filter(task => !task.isDone)
    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].id).toBe(1)
    expect(completedTasks[1].id).toBe(3)
})
