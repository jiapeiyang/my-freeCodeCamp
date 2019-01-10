/** 
 * 把指定的字符串翻译成 pig latin。
 * Pig Latin 把一个英文单词的第一个辅音或辅音丛（consonant cluster）移到词尾，然后加上后缀 "ay"。
 * 如果单词以元音开始，你只需要在词尾添加 "way" 就可以了。
 */

function translate (str) {
  let pigLatin = ''
  let regex = /[aeiou]/gi

  if (str[0].match(regex)) {
    pigLatin = str + 'way'
  } else {
    let idx = str.indexOf(str.match(regex)[0])
    pigLatin = str.substr(idx) + str.substr(0, idx) + 'ay'
  }

  return pigLatin
}

translate('consonant')