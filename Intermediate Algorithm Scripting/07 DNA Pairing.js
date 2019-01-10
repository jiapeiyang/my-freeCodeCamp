/**
 * DNA 链缺少配对的碱基。依据每一个碱基，为其找到配对的碱基，然后将结果作为第二个数组返回。
 * Base pairs（碱基对） 是一对 AT 和 CG，为给定的字母匹配缺失的碱基。
 * 在每一个数组中将给定的字母作为第一个碱基返回。
 * 例如，对于输入的 GCG，相应地返回 [["G", "C"], ["C","G"],["G", "C"]]
 * 字母和与之配对的字母在一个数组内，然后所有数组再被组织起来封装进一个数组。
 */

function pair (str) {
  const arr1 = ['A', 'T', 'C', 'G']
  const arr2 = ['T', 'A', 'G', 'C']
  const arr = str.split('')

  return arr.reduce((acc, cur) => {
    const idx = arr1.findIndex(v => v === cur)
    if (idx !== -1) {
      acc.push([cur, arr2[idx]])
    } 
    return acc
  }, [])
}

pair('GCG')