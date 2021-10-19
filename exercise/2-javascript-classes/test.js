const {Person,myPerson} = require('./code');
it('Should create canDrink method', () => {
    const myPerson = new Person('b','b',19)
    const myPerson2 = new Person('b','b',16)
    expect(myPerson.canDrink()).toBe(true)
    expect(myPerson2.canDrink()).toBe(false)
})

it('Should create a instance of Person', () => {
    expect(myPerson instanceof Person).toBe(true)
})