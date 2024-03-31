function addBinary(a: string, b: string): string {
  let idx = 1
  const result = []
  let hasCarry = false
  const isALarger = a.length > b.length
  for (let i = isALarger ? a.length - 1 : b.length - 1; i > -1; i--) {
    const c = isALarger ? a[i] : b[i]
    const d = isALarger ? b[b.length - idx] : a[a.length - idx]
    if (c === '1' && d === '1') {
      result.push(hasCarry ? '1' : '0')
      hasCarry = true
    } else if (c === '1' || d === '1') {
      result.push(hasCarry ? '0' : '1')
    } else {
      result.push(hasCarry ? '1' : '0')
      hasCarry = false
    }
    idx++
  }
  if (hasCarry) {
    result.push('1')
  }
  return result.reverse().join('')
}
