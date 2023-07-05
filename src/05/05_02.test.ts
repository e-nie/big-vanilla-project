import {CityType} from "../02/02_02";
import {createMessages, getStreetsTitlesOfGovernmentBuildings, getStreetsTitlesOfHouses} from "./05_02";
import {createMessage} from "../03/03";


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

test('list of streets titles of government buildings should be correct', () => {
    let streetsNames = getStreetsTitlesOfGovernmentBuildings(city.governmentBuildings)

    expect(streetsNames.length).toBe(2)
    expect(streetsNames[0]).toBe('Central Str')
    expect(streetsNames[1]).toBe('South Str')
})

test('list of streets titles', () => {
    let streetsNames = getStreetsTitlesOfHouses(city.houses)

    expect(streetsNames.length).toBe(3)
    expect(streetsNames[0]).toBe('White Street')
    expect(streetsNames[1]).toBe('Happy Street')
    expect(streetsNames[2]).toBe('Happy Street')
})

test('create greeting messages for streets', ()=> {
    let messages = createMessages(city.houses)

    expect(messages.length).toBe(3)
    expect([0]).toBe('Hello guys from White Street')
    expect([1]).toBe('Hello guys from Happy Street')
    expect([2]).toBe('Hello guys from Happy Street')
})
