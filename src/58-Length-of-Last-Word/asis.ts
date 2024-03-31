function lengthOfLastWord(s: string): number {
  let max = 0
  for (let i = s.length - 1; i > -1; i--) {
    if (s[i] === ' ') {
      if (max === 0) {
        continue
      } else {
        break
      }
    } else if (s[i] !== ' ') {
      max = max + 1
    }
  }
  return max
}
