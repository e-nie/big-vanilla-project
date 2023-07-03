import {CityType} from "../02/02_02";
import {addMoneyToBudget} from "../03/03";
import {demolishHousesOnTheStreet, getBuildingsWithStaffCountGreaterThan} from "./04_2";

let city: CityType

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                id: 1, builtAt: 2012, repaired: false,
                address: {number: 100, street: {title: 'White Street'}}
            },
            {
                id: 2, builtAt: 2008, repaired: false,
                address: {number: 100, street: {title: 'Happy Street'}}
            },
            {
                id: 3, builtAt: 2020, repaired: false,
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

test('Houses should be destroyed', () => {
    demolishHousesOnTheStreet(city, 'Happy Street')

    expect(city.houses.length).toBe(1)
    expect(city.houses[0].id).toBe(1)
})

test('Buildings with correct staff count', () => {
    let buildings = getBuildingsWithStaffCountGreaterThan(city.governmentBuildings,500)

    expect(buildings.length).toBe(1)
    expect(buildings[0].type).toBe('FIRE-STATION')
})
