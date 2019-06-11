
//数组的去重

// var removeDuplicates = function(nums) {
//     let len = nums.length;
//     if (len <= 1) { return len; }
//     let [tail, cur] = [0, 1];
//     while (cur < len) {
//         if (nums[tail] !== nums[cur]) {
//             nums[++tail] = nums[cur++];
//         } else {
//             cur++;
//         }
//     }
//     return tail + 1;
// };


var removeDuplicates = function(nums) {
    const ss = new Set(nums);
    [...ss].forEach((item, index) => {
      nums[index] = item;
    })
    return ss.length;
  };

  let a=removeDuplicates([1,2,3,5,1,2,2]);
  console.log(a)