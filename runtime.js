const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);

// MY COMMENTS AND RESULTS ARE AT THE BOTTOM

// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(tinyArray);
let resultsAppend = perf.stop();  // Stops timer and save time results

perf.start();
doublerAppend(smallArray);
let resultsAppend2 = perf.stop();

perf.start();
doublerAppend(mediumArray);
let resultsAppend3 = perf.stop();

perf.start();
doublerAppend(largeArray);
let resultsAppend4 = perf.stop();

perf.start();
doublerInsert(extraLargeArray);
let resultsAppend5 = perf.stop();

// Try it with second function
perf.start();                     // Starts timer
doublerAppend(tinyArray);
let resultsInsert = perf.stop();  // Stops timer and save time results

perf.start();
doublerAppend(smallArray);
let resultsInsert2 = perf.stop();

perf.start();
doublerAppend(mediumArray);
let resultsInsert3 = perf.stop();

perf.start();
doublerAppend(largeArray);
let resultsInsert4 = perf.stop();
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert5 = perf.stop();


console.log('Results for the tinyArray, smallArray, mediumArray, largeArray, extraLargeArray');
console.log('Results for the tinyArray');
console.log("insert", resultsInsert.preciseWords);
console.log('Results for the smallArray');
console.log("insert", resultsInsert2.preciseWords);
console.log('Results for the mediumArray');
console.log("insert", resultsInsert3.preciseWords);
console.log('Results for the largeArray');
console.log("insert", resultsInsert4.preciseWords);
console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert5.preciseWords)



console.log('Results for the tinyArray');
console.log("append", resultsAppend.preciseWords);
console.log('Results for the smallArray');
console.log("append", resultsAppend2.preciseWords);
console.log('Results for the mediumArray');
console.log("append", resultsAppend3.preciseWords);
console.log('Results for the largeArray');
console.log("append", resultsAppend4.preciseWords);
console.log('Results for the extraLargeArray');
console.log("append", resultsAppend5.preciseWords)

// NOTES:
// -test 1
// Results for the extraLargeArray
// insert 513.5882 ms
// append 3.003 ms

// -test 2
// Results for the tinyArray, smallArray, mediumArray, largeArray, extraLargeArray

// Results for the tinyArray
// insert 37.9 μs
// Results for the smallArray
// insert 4 μs
// Results for the mediumArray
// insert 34.6 μs
// Results for the largeArray
// insert 282 μs
// Results for the extraLargeArray
// insert 556.5488 ms
// Results for the tinyArray
// append 56 μs
// Results for the smallArray
// append 9.5 μs
// Results for the mediumArray
// append 28.1 μs
// Results for the largeArray
// append 274.4 μs
// Results for the extraLargeArray
// append 525.9866 ms

// RESPONSE:
// I believe the first function is better at handling smaller functions. It produced the first 2 arrays fastest, 
// but was slower at the larger arrays. The second function was faster at the larger arrays, but was slower with the 2 smaller arrays. 
// I'm guessing that the way these functions handle data differently, depending on the size or complexity.