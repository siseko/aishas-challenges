const numbers = [1,2,3];

console.log('the length of the array is: ', numbers.length); // will give you the number of items inside the array


// i = 4

/*
Order of operations in a for loop. Note <1> only runs once and everything else loops.
for (<1> let i = 0; <4> i < numbers.length; <3> i++) {
    <2> console.log(numbers[i]);
}
 */

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}