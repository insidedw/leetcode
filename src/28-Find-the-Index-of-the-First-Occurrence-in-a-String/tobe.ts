function strStr(haystack: string, needle: string): number {
  const needleLength = needle.length

  /**
   * to get needle hash
   */
  let needleHash = 0
  for (let i = 0; i < needleLength; i++) {
    needleHash = needleHash + needle.charCodeAt(i) * Math.pow(2, needleLength - 1 - i)
  }

  if (haystack.length < needleLength) {
    return -1
  }

  let haystackHash = 0
  for (let i = 0; i < haystack.length; i++) {
    if (i + needleLength > haystack.length) {
      break
    }

    /**
     * to get haystack hash
     */
    if (haystackHash === 0) {
      for (let j = 0; j < needleLength; j++) {
        haystackHash = haystackHash + haystack.charCodeAt(i + j) * Math.pow(2, needleLength - 1 - j)
      }
    } else {
      // rolling hash. Rabin finperpirnt
      haystackHash =
        haystackHash -
        haystack.charCodeAt(i + needleLength - 1) * Math.pow(2, needleLength - 1) +
        haystack.charCodeAt(i + 1)
    }

    if (haystackHash === needleHash) {
      return i
    } else {
      haystackHash = 0
    }
  }

  return -1
}
