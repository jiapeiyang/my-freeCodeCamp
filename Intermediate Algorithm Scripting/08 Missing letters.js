/**
 * 从传递进来的字母序列中找到缺失的字母并返回它。
 * 如果所有字母都在序列中，返回 undefined。
 */

function fearNotLetter (str) {
  let firstCharacter = str.charCodeAt(0)
  let value = ''
  let secondCharacter = ''

  for (let i = 1; i < str.length; i++) {
    secondCharacter = str.charCodeAt(i)

    if (secondCharacter - firstCharacter > 1) {
      while (secondCharacter - firstCharacter > 1) {
        firstCharacter++
        value += String.fromCharCode(firstCharacter)
      }

      return value
    }

    firstCharacter = str.charCodeAt(i)
  }

  if (!value.length) return undefined
  return value
}

fearNotLetter('abce')