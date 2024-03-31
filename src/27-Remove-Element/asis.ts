function removeElement(nums: number[], val: number): number {
  let j = 0
  for (const i of nums) {
    if (i !== val) {
      nums[j++] = i
    }
  }
  return j
}

/**
 * const b = [0, 1, 2, 2, 3, 0, 4, 2]
 * console.log(removeElement(b, 2))
 *
 * [modified]: "i",  0,  [0, 1, 2, 2, 3, 0, 4, 2]
 * [modified]: "i",  1,  [0, 1, 2, 2, 3, 0, 4, 2]
 * [skipped] : "i",  2,  [0, 1, 2, 2, 3, 0, 4, 2]
 * [skipped] : "i",  2,  [0, 1, 2, 2, 3, 0, 4, 2]
 * [modified]: "i",  3,  [0, 1, 3, 2, 3, 0, 4, 2] j가 2임 이유는 위에 2번 modified되어서
 * [modified]: "i",  0,  [0, 1, 3, 0, 3, 0, 4, 2]
 * [modified]: "i",  4,  [0, 1, 3, 0, 4, 0, 4, 2]
 * [skipped] : "i",  2,  [0, 1, 3, 0, 4, 0, 4, 2]
 */
