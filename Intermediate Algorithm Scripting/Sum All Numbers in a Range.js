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

// the first method
function sumAll(arr) {
 var maxNum = Math.max.apply(null, arr);
 var minNum = Math.min.apply(null, arr);
 var sum = 0;
 for(var i= minNum; i<= maxNum; i++) {
   sum +=i;
   console.log(sum);
 }
 return sum;
}

sumAll([1, 4]);
