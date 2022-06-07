//Get the functions from 'functions.js'
const functions = require('./functions');

//Call and close for each test
// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

//Call and close for all test
// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

//Dummy functions
// const initDatabase = () => console.log('Database Initialized...');
// const closeDatabase = () => console.log('Database Closed...');
const nameCheck = () => console.log('Checking Name...');

//Target specific functions
describe('Checking Names', () => {
    beforeEach(() => nameCheck());

    test('User is Jeff', () => {
        const user = 'Jeff';
        expect(user).toBe('Jeff');
    })
    test('User is Karen', () => {
        const user = 'Karen';
        expect(user).toBe('Karen');
    })
});

//toBe <- ONLY USED FOR PRIMITIVE TYPES
test('Adds 2 + 2 to equal 4', () => { //Arrow function used for cleaner syntax
    expect(functions.add(2,2)).toBe(4);
})

//toNotBe
test('Adds 2 + 2 to NOT equal 4', () => {
    expect(functions.add(2,2)).not.toBe(5); //toBe is used to look for a specific VALUE
})

//CHECK FOR TRUTHY & FALSY VALUES
//toBeNull matches only null
//toBeUndefined matches only undefined
//toBeDefined is the opposite of toBeUndefined
//toBeTruthy matches anything that an if statement treats as true
//toBeFalsy matches anything that an if statement treats as false

//toBeNull
test('Should be null', () => {
    expect(functions.isNUll(2, 2)).toBeNull();
})

//toBeFalsy
test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
})

//toEqual
test('User should be Brad Traversy object', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Brad',
        lastName: 'Traversy'
    })
})

//Less than and greater than
test('Should be under 1600', () => {

    //Putting logic directly within the test
    const load1 = 800;
    const load2 = 700;

    //Testing here
    expect(load1 + load2).toBeLessThan(1600);
})

//Regex
test('There is no I in team', () => {
    expect('team').not.toMatch((/I/i)); //Testing for string having the certain character
})

//Arrays
test('Admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin'); //Here we are testing to check if a certain value exists in an array
})

//Working with async data
//Promise
test('User fetched name should be Leanne Graham', () => {
    expect.assertions(1); //Used when testing asynchronous code to make sure the promise is called
    return functions.fetchUser().then(data => {
        expect(data.name).toEqual('Leanne Graham');
    })
})

//Async await
test('User fetched name should be Leanne Graham', async () => {
    expect.assertions(1); //Used when testing asynchronous code to make sure the promise is called
    const data = await functions.fetchUser();
        expect(data.name).toEqual('Leanne Graham');
})