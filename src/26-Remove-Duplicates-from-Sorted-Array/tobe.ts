function removeDuplicates(nums: number[]): number {
  let k: number = 1

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i]
      k++
    }
  }
  return k
}

/**
 * const b = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
 * removeDuplicates(b)
 * console.log(b)
 *
 * [0,0,1,1,1,2,2,3,3,4]  i = 1, k = 1
 * [0,1,1,1,1,2,2,3,3,4]  i = 2, k = 2
 * [0,1,2,1,1,2,2,3,3,4]  i = 5, k = 3
 * [0,1,2,3,1,2,2,3,3,4]  i = 7, k = 4
 * [0,1,2,3,4,2,2,3,3,4]  i = 9, k = 5
 */
