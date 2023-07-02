import {StudentType} from './../02/02'
import {CityType, GovernmentBuildingsType, HouseType} from "../02/02_02";

export const sum = (a: number, b: number) => {
    return a + b
}

const res = sum(sum(1, 2), sum(1, 3))

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export const makeStudentActive = (s: StudentType) => {
    s.isActive = true
}

export const doesStudentLiveIn = (s: StudentType, cityName: string) => {
    return cityName == s.address.city.title
}

export const addMoneyToBudget = (building: GovernmentBuildingsType, budget: number) => {
    building.budget += budget
}

// export const demolishHousesOnTheStreet = (city: CityType, happyStreet: string) => {

// }


export const repairHouse = (houseType: HouseType) => {
    houseType.repaired = true
}

export const toFireStaff = (building: GovernmentBuildingsType, staffCountToFire: number) => {
    building.staffCount -= staffCountToFire
}

export const toHireStaff = (building: GovernmentBuildingsType, staffCountToHire: number) => {
    building.staffCount += staffCountToHire
}

export const createMessage = (city: CityType) => {
    return`Hello, ${city.title} citizens! I want you all to be happy! All ${city.citizensNumber} men!`
}
