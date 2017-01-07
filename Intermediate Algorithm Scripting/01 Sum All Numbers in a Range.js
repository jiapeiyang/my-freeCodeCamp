/* task: Sum All Numbers in a Range
Difficulty: 2/5

We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between
them.
The lowest number will not always come first.
Remember to use RSAP if you get stuck. Try to pair program. Write your own code.
Here are some helpful links:
Math.max()
Math.min()
Array.reduce()

Code by jiapeiyang
1098486124@qq.com
https://freecodecamp.cn/jiapeiyang
*/

// first method
function sumAll(arr) {
 var maxNum = Math.max.apply(null, arr);  // or Math.max.apply(Math, arr) or Math.max(...arr); ES6 展开运算符
 var minNum = Math.min.apply(null, arr);  // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_operator
 var sum = 0;
 for(var i= minNum; i<= maxNum; i++) {
   sum +=i;
 }
 return sum;
}

// second method
function range (minNum, maxNum) {
  var newArr = [];
  for (var i=minNum; i<=maxNum; i++) {
    newArr.push(i);
  }
  return newArr;
}

function sumAll(arr) {
  var maxNum = Math.max.apply({}, arr);
  var minNum = Math.min.apply({}, arr);
  
  var sum = range(minNum, maxNum).reduce(function (previous, current) {
      return previous + current;
  });
  return sum;
}

// third method
function sumAll(arr) {
  var max = Math.max(arr[0],arr[1]);
  var min = Math.min(arr[0], arr[1]);
  return (max - min + 1) * (min + max) / 2;
}

sumAll([1, 4]);
