function addAll(...nums: number[]): number {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result += nums[i];
  }
  return result;
}
console.log(addAll(10, 20, 30, 40, 50, 60, +true));
