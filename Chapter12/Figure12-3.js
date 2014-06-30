load("CArray.js");
var nums = new CArray(10);
nums.insert(61);
nums.insert(85);
nums.insert(19);
nums.insert(88);
nums.insert(68);
nums.insert(8);
nums.insert(70);
nums.insert(29);

print(nums.toString());
nums.shellsort();
