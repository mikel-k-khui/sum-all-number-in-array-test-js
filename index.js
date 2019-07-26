/*
function sum(fromN, toN) {
  let total = fromN;
  if(fromN < toN) {
  return total += sum(++fromN,toN);
  }
  return total;
}
*/
/*
function printItems(array) {
  for (item of array) {
    if (Array.isArray(item)) {
      printItems(item);
    } else {
      console.log(item);
    }
  }
}
*/
function sumItems(array) {
  let total = 0;
  for (let counter = 0; counter < array.length; counter++) {
    if (Array.isArray(array[counter])) {
      total += sumItems(array[counter]);
    } else {
      total += array[counter];
    }
  }
  return total;
}
//module.exports = sum;

/*
[1, 2, 3, 4, 5]	15
[[1, 2, [[3], 4]], 5, []]	15
[[[[[[[[[[[[[1]]]]]]]]]]]]]	1
*/

module.exports = sumItems;