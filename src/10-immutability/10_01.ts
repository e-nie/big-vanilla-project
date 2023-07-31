export type UserType = {
    name: string
    hair: number
    address: { city: string, house?: number }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}

export type WithCompaniesType = UserType & {
    companies: Array<CompanyType>
}

type CompanyType = {
    id: number
    title: string
}

export function makeHairstyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    // copy.hair = u.hair /power
    return copy
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {
        ...u,
        address: {
            ...u.address,
            city: city,

        }
    }
    // copy.address = {
    //     ...u.address,
    //     city: city
    // }

}

export function moveUserToAnotherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
    return {
        ...u,
        address: {
            ...u.address,
            house: house,

        }
    }
}

export function upgradeUserLaptop(u: UserWithLaptopType, title: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: 'Mac'

        }
    }
}

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, newBook: Array<string>) {
    return {
        ...u,
        books: [...u.books, newBook]
    }
    // @ts-ignore
    // copy.books.push(newBooks)

}

export function updateBook(u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) {
    return {
        ...u,
        books: u.books.map(b => b === oldBook ? newBook : b)
    }
}

export const removeBook = (u: UserWithLaptopType & UserWithBooksType, bookToRemove: string) => {
    return {
        ...u,
        books: u.books.filter(b => b !== bookToRemove)
    }
}

export function addCompany(u: UserWithLaptopType & WithCompaniesType, newCompany: CompanyType) {
    return {
        ...u,
        companies: [
            ...u.companies, newCompany
        ]
    }
}


//with ternary operator
export const  updateCompanyTitle = (u: WithCompaniesType,
                                    companyId: number,
                                    updatedTitle: string) => {
    const copy: WithCompaniesType = {
        ...u,
        companies: u.companies.map(el => el.id === companyId ? {...el, title: updatedTitle} : el)
    }

    return copy
}

//full version (without ternary operator)

export const  updateCompanyTitle1 = (u: WithCompaniesType,
                                    companyId: number,
                                    updatedTitle: string) => {
    const copy: WithCompaniesType = {
        ...u,
        companies: u.companies.map(el => {
            if(el.id === companyId) {
               return {...el, title:updatedTitle}
            } else {
                return el
            }
        })
    }

    return copy
}

export const  updateCompanyTitle2 = (companies:{[key:string]: Array<CompanyType>},
                                     userName: string,
                                     companyId: number,
                                     newTitle: string) => {
    let companyCopy = {...companies}

companyCopy[userName] = companyCopy[userName].map(el=> el.id === companyId ? {...el, title: newTitle} : el)

    return companyCopy
}

