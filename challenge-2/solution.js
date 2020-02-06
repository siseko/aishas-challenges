// Build the following function to find all numbers smaller than a specific number

/**
 *
 * @param numbers the array with the list of numbers
 * @param number the 'smaller than' number
 */

function findNumbersSmallerThan(numbers, number) {
  // Startiong Point (Initializer, Starter)
  // Condition for when your loop should end
  // Incrementor or Decrementor || continues going up or down

  /* for ([initialization]; [condition]; [final-expression]) {} */
 if (number < 5) {
   console.log(number);
 }
  return numbers; // Return a list with only the numbers smaller than 'number'
}
module.exports = findNumbersSmallerThan;
