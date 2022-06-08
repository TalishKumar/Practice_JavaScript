const sum = require("./sum")

//Test the sum function
test("should add 1 + 2 to equal 3", () => {
    const result = sum(1,2)
    expect(result).toBe(3)
})

//toBe does not work with objects and arrays

//Group common tests in describe block
describe('example tests', () => {
    test("should add 1 + 2 to equal 3", () => {
        const result = sum(1,2)
        expect(result).toBe(3)
    })

    test("objest assignment", () => {
        const obj = {};
        expect(obj).toEqual({})
    })
});

describe('truthy or falsy', () => {
    test("null", () => {
        const n = null;

        //Same statement
        expect(n).toBeFalsy()
        expect(n).not.toBeTruthy()

        expect(n).toBeNull()
        //expect(n).toBeUndefined() //will fail
        expect(n).not.toBeUndefined() //will pass
    })
});

describe("numbers", () => {
    test("two plus two", () => {
        const value = 2 + 2;
        expect(value).toBe(4)
        expect(value).toBeGreaterThan(3)
        expect(value).toBeGreaterThanOrEqual(4)
        expect(value).toBeLessThan(7)
        expect(value).toBeLessThanOrEqual(4)
    })

    test("adding floats", () => {
        const value = 0.1 + 0.2;
        expect(value).toBeCloseTo(0.3)
        expect(value).toBeCloseTo(0.2999999999)
    })
})

describe("strings", () => {
    test("there is no I in team", () => {
        expect("team").not.toMatch(/I/)
    })
})

describe("arrays", () => {
    const shoppingLists = [
        'diapers', 'kleenex', 'trash bags', 'paper towels', 'milk'
        ]

    expect(shoppingLists).toContain('milk');
})

function compileAndroidCode() {
    throw new Error("you are using the wrong JDK")
}

describe("exceptions", () => {
    test("compiling android goes as expected", () => {
        expect(() => compileAndroidCode()).toThrow(
            "you are using the wrong JDK"
        )
    })
})