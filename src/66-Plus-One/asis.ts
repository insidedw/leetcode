function plusOne(digits: number[]): number[] {
  let sum = 0
  for (let i = 0; i < digits.length; i++) {
    sum = sum + digits[i] * Math.pow(10, digits.length - 1 - i)
  }
  sum = sum + 1

  return (sum + '').split('').map((e) => parseInt(e))
}
