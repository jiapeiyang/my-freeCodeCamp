/* Bonfire: Roman Numeral Converter
Difficulty: 2/5
Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case.
Remember to use RSAP if you get stuck. Try to pair program. Write your own code.
Here are some helpful links:
Array.splice() Array.indexOf() Array.join()

Code by jiapeiyang
1098486124@qq.com
http://www.freecodecamp.com/jiapeiyang
*/

function convert(num) {
  const romanNum = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000]
  const roman = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M']

  let i = romanNum.length - 1
  let str = ''

  while (num > 0) {
    if (num < romanNum[i]) {
      i--
    } else {
      str += roman[i]
      num -= romanNum[i]
    }
  }

  return str
}
