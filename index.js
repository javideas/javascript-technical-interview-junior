// Solution 2
function twoSum(nums, target) {
    /* if target is 9 and first elem is 2, we need to find next time a 7
    but maybe next elems are 3 and later 4, so we just need to hold every num we check in a "list"
    so we avoid unnecessary looping. */

    // we'll create an empty Object as a Dictionary of numbers
    // in every page we will check if we already found what we need till "9".
    // i.e. for "[2,7,11,15]" and target "9":
    // page 0, value 2, we need 7 till 9. is 7 already? no, so we write we need 7 in page 0. {7: 0}
    // page 1, value 7, is 7 already? yes, where? page 0. But where we are? page 1. return [0, 1]
    let cache = {};
    // first we start to loop through every element of nums:
    for(let i = 0; i < nums.length; i++) {
        // if we don't find the the num[i] in any page
        // aka is "not defined"
        if(cache[nums[i]] === undefined) {
            // We create that entry, aka we create a key with a value
            // the key is "target - current element", what we need till "9"
            // and the value is the "i", the "page" where we wrote it
            cache[target - nums[i]] = i;
        } else {
            // if it is in the Dictionary, then
            // we return the value (page) of that key that we saved in the Dictionary
            // together with "i", the "page" where we are right now, where we found what we need to sum "9"
            return [cache[nums[i]], i]
            // return position of num till "9" (7) on cache (0) with position where we are now when we found 7 (1)
        }
    }
}

// Solution 1, time = N(2)
// function twoSum(nums, target) {
//     for(let i = 0; i < nums.length; i++) {
//         for(let j = i + 1; j < nums.length; j++) {
//             if(nums[i] + nums[j] === target) return [i,j];
//         }
//     }
// }

module.exports = twoSum;