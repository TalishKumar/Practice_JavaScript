//Setup and teardown tests
let animals = []

describe('animals array', () =>
{
    //Will only run for the tests in the describe block
    beforeEach(() => {
        animals = ['elephant', 'zebra', 'bear', 'tiger']
    })

    afterEach(() => {
        animals = ['elephant', 'zebra', 'bear', 'tiger']
    })

    test("should add animal to end of array", () => {
        animals.push("aligator")
        expect(animals[animals.length - 1]).toBe("aligator");
    })

    test("should add animal to beginning of array", () => {
        animals.unshift("monkey")
        expect(animals[0]).toBe("monkey");
    })

    test("should have initial length of 4", () => {
        expect(animals.length).toBe(4)
    })
});

describe('testing something else', () => {
    test("true should be truthy", () => {
        expect(true).toBeTruthy()
    })
});