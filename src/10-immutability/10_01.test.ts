import {
    addCompany,
    addNewBooksToUser,
    makeHairstyle,
    moveUser,
    moveUserToAnotherHouse, removeBook, updateBook, updateCompanyTitle, updateCompanyTitle2,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
} from "./10_01";


test('reference type test', () => {
    let user: UserType = {
        name: 'Eva',
        hair: 500,
        address: {
            city: 'Zurich',
            house: 12
        }
    }

    const awesomeUser = makeHairstyle(user, 2)

    expect(user.hair).toBe(500)
    expect(awesomeUser.hair).toBe(250)
    expect(awesomeUser.address).toBe(user.address)
})


test('change address', () => {
    let user: UserWithLaptopType = {
        name: 'Eva',
        hair: 500,
        address: {
            city: 'Zurich',
            house: 12

        },
        laptop: {
            title: 'Lenovo'
        }
    }

    const movedUser = moveUser(user, 'London')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(movedUser.laptop.title).toBe(user.laptop.title)
    expect(movedUser.address.city).toBe('London')
})

test('upgrade laptop to Mac', () => {
    let user: UserWithLaptopType = {
        name: 'Eva',
        hair: 500,
        address: {
            city: 'Zurich',
            house: 12

        },
        laptop: {
            title: 'Lenovo'
        }
    }

    const userWithNewLaptop = upgradeUserLaptop(user, 'Mac')

    expect(user).not.toBe(userWithNewLaptop)
    expect(user.address).toBe(userWithNewLaptop.address)
    expect(user.laptop.title).not.toBe(userWithNewLaptop.laptop.title)
    expect(userWithNewLaptop.laptop.title).toBe('Mac')
    expect(user.laptop.title).toBe('Lenovo')
})

test('change user\'s house number', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Eva',
        hair: 500,
        address: {
            city: 'Zurich',
            house: 12

        },
        laptop: {
            title: 'Lenovo'
        },
        books: ['css', 'html', 'refactoring', 'react']
    }

    const userWithNewHouse = moveUserToAnotherHouse(user, 99)

    expect(user).not.toBe(userWithNewHouse)
    expect(user.books).toBe(userWithNewHouse.books)
    expect(user.laptop).toBe(userWithNewHouse.laptop)
    expect(user.address).not.toBe(userWithNewHouse.address)
    expect(userWithNewHouse.address.house).toBe(99)
})

test('add new books to user ', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Eva',
        hair: 500,
        address: {
            city: 'Zurich',
            house: 12

        },
        laptop: {
            title: 'Lenovo'
        },
        books: ['css', 'html', 'refactoring', 'react']
    }

    // @ts-ignore
    const userWithNewBooks = addNewBooksToUser(user, 'ts')

    expect(user).not.toBe(userWithNewBooks)
    expect(user.books).not.toBe(userWithNewBooks.books)
    expect(user.laptop).toBe(userWithNewBooks.laptop)
    expect(user.address).toBe(userWithNewBooks.address)
    expect(userWithNewBooks.books[4]).toBe('ts')
    expect(user.books.length).toBe(4)
    expect(userWithNewBooks.books.length).toBe(5)
})

test('update js to ts ', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Eva',
        hair: 500,
        address: {
            city: 'Zurich',
            house: 12

        },
        laptop: {
            title: 'Lenovo'
        },
        books: ['css', 'html', 'js', 'react']
    }

    // @ts-ignore
    const userUpdatedBook = updateBook(user, 'js', 'ts')

    expect(user).not.toBe(userUpdatedBook)
    expect(user.books).not.toBe(userUpdatedBook.books)
    expect(user.laptop).toBe(userUpdatedBook.laptop)
    expect(user.address).toBe(userUpdatedBook.address)
    expect(userUpdatedBook.books[2]).toBe('ts')

})

test('remove js book from the list ', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Eva',
        hair: 500,
        address: {
            city: 'Zurich',
            house: 12

        },
        laptop: {
            title: 'Lenovo'
        },
        books: ['css', 'html', 'js', 'react']
    }


    const userRemovedBook = removeBook(user, 'js')

    expect(user).not.toBe(userRemovedBook)
    expect(user.books).not.toBe(userRemovedBook.books)
    expect(user.laptop).toBe(userRemovedBook.laptop)
    expect(user.address).toBe(userRemovedBook.address)
    expect(userRemovedBook.books[2]).toBe('react')
    expect(userRemovedBook.books.length).toBe(3)


})

test('add new company ', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Eva',
        hair: 500,
        address: {
            city: 'Zurich',
            house: 12

        },
        laptop: {
            title: 'Lenovo'
        },
        companies: [{id: 1, title: 'Amazon'}, {id: 2, title: 'Facebook'}]
    }


    const userNewCompany = addCompany(user, {id: 3, title: 'Google'})

    expect(user).not.toBe(userNewCompany)
    expect(user.laptop).toBe(userNewCompany.laptop)
    expect(user.address).toBe(userNewCompany.address)
    expect(userNewCompany.companies[2].title).toBe('Google')
    expect(userNewCompany.companies.length).toBe(3)


})

test('update company name', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Eva',
        hair: 500,
        address: {
            city: 'Zurich',
            house: 12

        },
        laptop: {
            title: 'Lenovo'
        },
        companies: [{id: 1, title: 'Amazon'}, {id: 2, title: 'Facebook'}]
    }


    const userUpdatedCompany = updateCompanyTitle(user, 1, 'Netflix') as UserWithLaptopType & WithCompaniesType

    expect(user).not.toBe(userUpdatedCompany)
    expect(user.laptop).toBe(userUpdatedCompany.laptop)
    expect(user.address).toBe(userUpdatedCompany.address)
    expect(userUpdatedCompany.companies).not.toBe(user.companies)
    expect(userUpdatedCompany.companies[0].title).toBe('Netflix')
    expect(userUpdatedCompany.companies.length).toBe(2)


})

test('update company structure with ass array', () => {

    let companies = {
        ['Eva']: [{id: 1, title: 'Amazon'}, {id: 2, title: 'Facebook'}],
        ['Ann']: [{id: 1, title: 'Uber'}]
    }

    const updatedCompanyTitle = updateCompanyTitle2(companies, 'Eva', 2, 'Tesla')

    expect(updatedCompanyTitle['Eva']).not.toBe(companies['Eva'])
    expect(updatedCompanyTitle['Ann']).toBe(companies['Ann'])
    expect(updatedCompanyTitle['Eva'][1].title).toBe('Tesla')
})
