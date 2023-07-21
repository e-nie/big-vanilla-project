function increaseAge(u: UserType) {
    u.age++
}

type UserType = {
    name: string
    age: number
    address: { title: string }
}

test('big reference type test', () => {

    let user: UserType = {
        name: 'Dimych',
        age: 32,
        address: {
            title: 'Minsk'
        }
    }

    increaseAge(user)

    expect(user.age).toBe(33)

    const superman = user
    superman.age = 1000

    expect(user.age).toBe(1000)

})

test('big array test', () => {

    let users = [
        {
            name: 'Dimych',
            age: 32
        },
        {
            name: 'Dimych',
            age: 32
        }
    ];
    let admins = users

    admins.push({name: 'Bandyugan', age: 10})
    expect(users[2]).toEqual({name: 'Bandyugan', age: 10})
})

test(' reference type test', () => {
    const address = {
        title: 'Minsk'
    }
    let user: UserType = {
        name: 'Dimych',
        age: 32,
        address: address
    }

    address.title = 'Minsk City'

    let user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: user.address
    }

    expect(user2.address.title).toBe('Minsk City')
})

test(' reference type array test', () => {
    const address = {
        title: 'Minsk'
    }
    let user: UserType = {
        name: 'Dimych',
        age: 32,
        address: address
    }


    let user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: user.address
    }

    const users = [user, user2, {name: 'Misha', age: 4, address: address}]

    const admins = [user, user2]

    admins[0].name='Dmitry'

    expect(users[0].name).toBe('Dmitry')
    expect(user.name).toBe('Dmitry')
})
