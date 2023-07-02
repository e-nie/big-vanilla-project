type CityType = {
    title: string
    country: string
}

type AddressType = {
    street: string
    city: CityType
}

type TechType = {
    id: number
    title: string
}

export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechType>
}

export const student: StudentType = {
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

console.log(student.address.city.title);
console.log(student.technologies[2].title);
