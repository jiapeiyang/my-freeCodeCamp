/**
 * 使用给定的参数对句子执行一次查找和替换，然后返回新句子。
 * 第一个参数是将要对其执行查找和替换的句子。
 * 第二个参数是将被替换掉的单词（替换前的单词）。
 * 第三个参数用于替换第二个参数（替换后的单词）。
 * 注意：替换时保持原单词的大小写。例如，如果你想用单词 "dog" 替换单词 "Book" ，你应该替换成 "Dog"。
 */

/** 方法一 */
function myReplace (str, before, after) {
  const idx = str.indexOf(before)
  if (idx === -1) return str
  const chatStr = before.charAt(0)
  
  if (chatStr.toUpperCase() === chatStr) {
    after = after.charAt(0).toUpperCase() + after.slice(1)
  }

  str = str.replace(before, after)

  return str
}

/** 方法二 */
function myReplaceTest (str, before, after) {
  const arr = str.split(' ')
  const idx = arr.findIndex(item =>  item === before)
  if (idx === -1) return str
  after = arr[idx].charAt(0) === arr[idx].charAt(0).toUpperCase() ? after.charAt(0).toUpperCase() + after.alice(1) : after
  arr.splice(idx, 1, after)
  return arr.join(' ')
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");