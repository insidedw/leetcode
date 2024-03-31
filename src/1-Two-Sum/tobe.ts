function twoSum(nums: number[], target: number): number[] {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const value = target - nums[i]
    if (map.has(value)) {
      return [i, map.get(value)]
    }
    map.set(nums[i], i)
  }

  return [-1, -1]
}
