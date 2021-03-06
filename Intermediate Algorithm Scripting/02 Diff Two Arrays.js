/* Bonfire: Diff Two Arrays
Difficulty: 2/5
Compare two arrays and return a new array with any items not found in both of the original arrays.
Remember to use RSAP if you get stuck. Try to pair program. Write your own code.
Here are some helpful links:
Comparison Operators
String.slice()
Array.filter()
Array.indexOf()
String.concat()
Code by jiapeiyang
1098486124@qq.com
https://freecodecamp.cn/jiapeiyang
*/
// first method
function diff(arr1, arr2) {
  var newArr = arr1.concat(arr2);
  return newArr.filter(function (item) {
     if (arr1.indexOf(item) === -1 || arr2.indexOf(item) === -1) {
       return item;
     }
  });
}

// second method
function diff(arr1, arr2) {
  var newArr = [];
  for (var i=0; i<= arr1.length -1; i++) {
     if (arr2.indexOf(arr1[i]) < 0 && newArr.indexOf(arr1[i]) < 0) {
       newArr.push(arr1[i]);
     }
  }
  
  for(var j = 0; j <=arr2.length -1; j++) {
    if (arr1.indexOf(arr2[j]) < 0 && newArr.indexOf(arr2[j]) < 0) {
      newArr.push(arr2[j]);
    }
  }
  return newArr;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
