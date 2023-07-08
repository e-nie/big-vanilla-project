import React from 'react';

type LessonsType = {
    title: string
    name?: string
}
type AddressType = {
    street: StreetType
}

type StreetType = {
    title: string
}

export type ManType = {
    name: string
    age: number
    lessons: LessonsType[],
    address: AddressType
}


type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: { model: string }
}

export const ManComponent: React.FC<PropsType> = ({title, man, ...props}) => {
    // const {title, man, ...restProps} = props
    // const {title}=props
    // const {name}=props.man

    // const {title, man} = props

    const myUseState = (m:string) => {
        return [m, function(){}]
    }

    const [message, setMessage] = myUseState('hello')
    return <div>
        <h1>{title}</h1>
        <hr />
        <div>
            {props.car.model}
        </div>
        <div>
            {man.name}
        </div>
    </div>
}
