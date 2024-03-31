function isValid(s: string): boolean {
  const stack: string[] = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      stack.push(s[i])
      continue
    }

    if (s[i] === ')') {
      const b = stack.pop()
      if (b !== '(') return false
    } else if (s[i] === '}') {
      const b = stack.pop()
      if (b !== '{') return false
    } else if (s[i] === ']') {
      const b = stack.pop()
      if (b !== '[') return false
    }
  }
  if (stack.length > 0) return false
  return true
}
