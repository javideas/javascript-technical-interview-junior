const twoSum = require('./index');

describe('twoSum', () => {
    test('should return the indices [0,1] of the two numbers that add up from [2,7,11,15] to the target 9', () => {
        const expected = [0,1];
        const result = twoSum([2,7,11,15], 9);
        expect(result).toEqual(expected);
    }),
    test('should return the indices [1,2] of the two numbers that add up from [3,2,4] to the target 6', () => {
        const expected = [1,2];
        const result = twoSum([3,2,4], 6);
        expect(result).toEqual(expected);
    }),
    test('should return the indices [0,1] of the two numbers that add up from [3,3] to the target 6', () => {
        const expected = [0,1];
        const result = twoSum([3,3], 6);
        expect(result).toEqual(expected);
    })
})