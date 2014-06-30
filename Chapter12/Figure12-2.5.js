load("CArray.js");
var nums = new CArray(10);
nums.insert(72);
nums.insert(54);
nums.insert(59);
nums.insert(30);
nums.insert(31);
nums.insert(78);
nums.insert(2);
nums.insert(77);
nums.insert(82);
nums.insert(72);

print(nums.toString());
nums.insertionSort();
