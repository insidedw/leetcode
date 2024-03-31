function isPalindrome(x: number): boolean {
  if (x < 0) return false
  if (x === 0) return true

  return x === parseInt(`${x}`.split('').reverse().join(''))
}
