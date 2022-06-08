const axios = require("axios")

const fetchData = async (id) => {
    const results = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
    return results.data;
}

const forEach = (items, callBack) => {
    for (let i = 0; i < items.length; ++i)
    {
        callBack(items[i]);
    }
}

test("mock callBack", () => {
    const mockCallBack = jest.fn(x => 42 + x)

    forEach([0,1], mockCallBack);

    expect(mockCallBack.mock.calls.length).toBe(2)
    //[call1, call2]

    expect(mockCallBack.mock.calls[0][0].toBe(0))

    expect(mockCallBack.mock.calls[1][0].toBe(1))

    expect(mockCallBack.mock.results[0].value).toBe(42)
    expect(mockCallBack.mock.results[1].value).toBe(43)
})

test("mock return", () => {
    const mock = jest.fn();

    mock.mockReturnValueOnce(true)

    const results = mock();

    expect(results).toBe(true);
})

test("mock axios", async () => {
    jest.spyOn(axios, "get").mockReturnValueOnce({
        data: {
            id: 1,
            todo: "Mock the Function"
        }
    })
    const results = await fetchData(1);

    expect(results.todo).toBe("Mock the Function");
})