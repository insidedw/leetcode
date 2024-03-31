function isValid(s: string): boolean {
  if (s.length % 2 !== 0) return false

  const mapParentheses: Record<string, string> = { '{': '}', '(': ')', '[': ']' }
  let stack: string[] = []

  for (let i = 0; i < s.length; i++) {
    const currentChar = s.charAt(i)
    if (mapParentheses[currentChar]) {
      stack.push(currentChar)
    } else {
      const topElement = stack.pop()
      if (!topElement) return false
      if (mapParentheses[topElement] !== currentChar) {
        return false
      }
    }
  }

  return stack.length === 0
}
