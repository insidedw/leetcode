const sym = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

function handleFive(arr: string[], sum: number) {
  const a = arr.shift()
  if (!a) return sum

  return sum + sym[a]
}

function handleNineOrFour(arr: string[], sum: number, target: string, fiveTimesTarget: string, tenTimesTarget: string) {
  arr.shift()

  const targetVal = sym[target]
  const fiveTimesTargetVal = sym[fiveTimesTarget]
  const tenTimesTargetVal = sym[tenTimesTarget]

  if (!targetVal || !fiveTimesTargetVal || !tenTimesTargetVal) {
    return sum
  }

  if (arr[0] === fiveTimesTarget) {
    arr.shift()
    sum = sum + fiveTimesTargetVal - targetVal
  } else if (arr[0] === tenTimesTarget) {
    arr.shift()
    sum = sum + tenTimesTargetVal - targetVal
  } else {
    sum = sum + targetVal
  }
  return sum
}

function romanToInt(s: string): number {
  const arr = s.split('')
  let sum = 0
  while (arr.length > 0) {
    switch (arr[0]) {
      case 'I':
        sum = handleNineOrFour(arr, sum, 'I', 'V', 'X')
        break

      case 'V':
        sum = handleFive(arr, sum)
        break

      case 'X':
        sum = handleNineOrFour(arr, sum, 'X', 'L', 'C')
        break

      case 'L':
        sum = handleFive(arr, sum)
        break

      case 'C':
        sum = handleNineOrFour(arr, sum, 'C', 'D', 'M')
        break

      case 'D':
        sum = handleFive(arr, sum)
        break

      case 'M':
        sum = handleFive(arr, sum)
        break

      default:
        arr.shift()
        break
    }
  }

  return sum
}
