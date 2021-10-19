const {person, personString, isHappy, canDrink, personCopy} = require('./code');

test('Person name should be string', () => {
    expect(typeof person?.name).toBe("string")
});

test('Person age should be number', () => {
    expect(typeof person?.age).toBe("number")
});

test('Person hobbies should be array', () => {
    expect(Array.isArray(person?.hobbies)).toBe(true)
});

test('Person married should be boolean', () => {
    expect(typeof person?.married).toBe("boolean")
});

test('Person should be object', () => {
    expect(typeof person).toBe("object")
});

test('Person String', () => {
    expect(personString).toBe(`${person.name}-${person.age}`)
});

test('Person Can Drink', () => {
    expect(canDrink).toBe(person.age >= 18)
});

test('Check if Person is Happy', () => {
    expect(isHappy).toBe(!person.married && canDrink)
});

test('PersonCopy should be copy of person', () => {
    expect(JSON.stringify(personCopy) === JSON.stringify(person) && person !== personCopy).toBe(true)
});