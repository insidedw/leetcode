function isPalindrome(x: number): boolean {
  return (x + '').split('').join('') === (x + '').split('').reverse().join('')
}
