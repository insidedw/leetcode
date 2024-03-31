function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return ''
  if (strs.length === 1) return strs[0]

  const minLength = Math.min(...strs.map((e) => e.length))
  const b = strs[0].slice(0, minLength)

  let prefix = []
  let count = 0

  for (let i = 1; i < strs.length; i++) {
    const c = strs[i].slice(0, minLength)
    for (let j = 0; j < b.length; j++) {
      if (b[j] === c[j]) {
        count = count + 1
      } else {
        break
      }
    }
    prefix.push(count)
    count = 0
  }

  const d = Math.min(...prefix)
  return b.slice(0, d)
}
