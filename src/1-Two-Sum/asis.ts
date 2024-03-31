function twoSum(nums: number[], target: number): number[] {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const value = nums[i]
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }

  return [-1, -1]
}
