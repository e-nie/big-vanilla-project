import {StudentType} from "../02/02";
import {addSkill, makeStudentActive, doesStudentLiveIn} from "./03";


let student: StudentType

beforeEach(() => {

})
student = {
    id: 1,
    name: 'Evchen',
    age: 47,
    isActive: true,
    address: {
        street: 'Siefener 28A',
        city: {
            title: 'Wiehl',
            country: 'Germany'
        }
    },
    technologies: [
        {
            id: 1,
            title: 'HTML'
        },
        {
            id: 2,
            title: 'CSS'
        },
        {
            id: 3,
            title: 'React'
        }
    ]
}


test('new skill should be added to student', () => {
    expect(student.technologies.length).toBe(3)
    addSkill(student, 'JS')
    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe('JS')
    expect(student.technologies[3].id).toBeDefined()
})

test('student should be made active', () => {
    makeStudentActive(student)
    expect(student.isActive).toBe(true)
})

test('student should live in city', () => {
   let result1 =  doesStudentLiveIn(student, 'Moscow')
   let result2 =  doesStudentLiveIn(student, 'Wiehl')
    expect(result1).toBe(false)
    expect(result2).toBe(true)
})
