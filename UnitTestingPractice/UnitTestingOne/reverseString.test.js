//import the reverseString js file for testing
const reverseString = require('./reverseString');

//test to see if the function exists
test('reverseString function exists', () => {
    expect(reverseString).toBeDefined();
})

//Test to see if the string actually reverses
test('String reverses', () => {
    expect(reverseString('hello')).toEqual('olleh');
});
test('String reverses with uppercase', () => {
    expect(reverseString('Hello')).toEqual('olleh');
});