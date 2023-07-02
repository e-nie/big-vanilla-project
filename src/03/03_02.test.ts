import {CityType} from "../02/02_02";
import {addMoneyToBudget, createMessage, repairHouse, toFireStaff, toHireStaff} from "./03";


let city: CityType

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                builtAt: 2012, repaired: false,
                address: {number: 100, street: {title: 'White Street'}}
            },
            {
                builtAt: 2008, repaired: false,
                address: {number: 100, street: {title: 'Happy Street'}}
            },
            {
                builtAt: 2020, repaired: false,
                address: {number: 101, street: {title: 'Happy Street'}}
            },


        ],
        governmentBuildings: [
            {
                type: 'HOSPITAL',
                budget: 200_000,
                staffCount: 200,
                address: {
                    street: {
                        title: 'Central Str'
                    },
                },
            },

            {
                type: 'FIRE-STATION',
                budget: 500_000,
                staffCount: 1000,
                address: {
                    street: {
                        title: 'South Str'
                    },
                },
            },
        ],
        citizensNumber: 1_000_000
    }
})

test('Budget should be changed for HOSPITAL', () => {
    addMoneyToBudget(city.governmentBuildings[0], 100_000)

    expect(city.governmentBuildings[0].budget).toBe(300_000)
})

test('Budget should be changed for FIRE-STATION', () => {
    addMoneyToBudget(city.governmentBuildings[1], -100000)

    expect(city.governmentBuildings[1].budget).toBe(400_000)
})


// test('Houses should be destroyed', () => {
//     demolishHousesOnTheStreet(city, 'Happy Street')
//     expect(city.houses.length).toBe(1)
// })


test('Houses should be repaired', () => {
    repairHouse(city.houses[1])

    expect(city.houses[1].repaired).toBe(true)
})

test('Staff should be decreased', () => {
    toFireStaff(city.governmentBuildings[0], 20)

    expect(city.governmentBuildings[0].staffCount).toBe(180)
})

test('Staff should be increased', () => {
    toHireStaff(city.governmentBuildings[0], 20)
    toHireStaff(city.governmentBuildings[1], 100)

    expect(city.governmentBuildings[0].staffCount).toBe(220)
    expect(city.governmentBuildings[1].staffCount).toBe(1100)
})

test('Greeting message should be correct', () => {
    // const message = createMessage(city)

    expect(createMessage(city)).toBe('Hello, New York citizens! I want you all to be happy! All 1000000 men!')
})

