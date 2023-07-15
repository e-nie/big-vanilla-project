// import {users} from "./08-01";

type UsersType = {
    [key:string]: {id:number, name:string}
}

  let users:UsersType


beforeEach(()=> {
    users = {
        '101': {id: 101, name: 'Dimych'},
        '1212': {id: 1212, name: 'Natasha'},
        '3456': {id: 3456, name: 'Valera'},
        '1': {id: 1, name: 'Katya'},
    }
})

test('should update corresponding user', ()=> {
    users['1'].name='Ekaterina'
    expect(users['1'].name).toBe('Ekaterina')
    expect(users['1']).toStrictEqual({id: 1, name: 'Ekaterina'})
})

test('should delete corresponding user', ()=> {
   delete users['1']
    // expect(users['1']).toBe(undefined) // also pass
    expect(users['1']).toBeUndefined( )

})
