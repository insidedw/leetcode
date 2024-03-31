function mySqrt(x: number): number {
  if (x === 0) {
    return 0
  }

  let x0 = x / 2
  let difference = 1
  const accuracy = 0.01
  while (difference > accuracy) {
    const x1 = 0.5 * (x0 + x / x0)
    difference = x0 - x1
    x0 = x1
  }

  return Math.floor(x0)
}
