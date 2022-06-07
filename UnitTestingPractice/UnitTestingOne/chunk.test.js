const chunkArray = require('./chunk');

//Test to see if the function exists
test('chunkArray function exists', () => {
    expect(chunkArray).toBeDefined();
})

//Test to see if the function actually works
test('Chunk an array of 10 values with the length of 2', () => {
    //Arrange
    const numbers = [1,2,3,4,5,6,7,8,9,10];
    const len = 2;

    //Act
    const chunkedArr = chunkArray(numbers, len);

    //Assert
    expect(chunkedArr).toEqual([[1,2], [3,4], [5,6], [7,8], [9,10]]);
})
test('Chunk an array of 3 values with the length of 1', () => {
    //Arrange
    const numbers = [1,2,3];
    const len = 1;

    //Act
    const chunkedArr = chunkArray(numbers, len);

    //Assert
    expect(chunkedArr).toEqual([[1], [2], [3]]);
})