// Example 12-1, Array test bed class
function CArray(numElements) {
   this.dataStore = [];
   this.pos = 0;
   this.gaps = [5,3,1]; // Figure 12-3
   this.numElements = numElements;
   this.insert = insert;
   this.toString = toString;
   this.clear = clear;
   this.setData = setData;
   this.setGaps = setGaps; // Figure 12-3
   this.swap = swap;

   this.bubbleSort = bubbleSort; // Example 12-3
   this.selectionSort = selectionSort; // Example 12-6
   this.insertionSort = insertionSort; // Example 12-7
   this.shellsort = shellsort; // Figure 12-3
   this.mergeSort = mergeSort; // Example 12-13
   this.mergeArrays = mergeArrays; // Example 12-13

   for (var i = 0; i < numElements; ++i) {
      this.dataStore[i] = i;
   }
}

function setData(order) {
   if (order === 1) { // already numeric order
   }
   else if (order === -1) { // reverse numeric order
      for (var i = 0; i < this.numElements; ++i) {
         this.dataStore[i] = this.numElements - i;
      }
   }
   else { // random numbers
      for (var i = 0; i < this.numElements; ++i) {
         this.dataStore[i] = Math.floor(Math.random() *
                             (this.numElements + 1));
      }
   }
}

function clear() {
   for (var i = 0; i < this.dataStore.length; ++i) {
      this.dataStore[i] = 0;
   }
}

function insert(element) {
   this.dataStore[this.pos++] = element;
}

function toString() {
   var retstr = "";
   for (var i = 0; i < this.dataStore.length; ++i) {
      retstr += this.dataStore[i] + " ";
      if (i > 0 && i % 10 == 0) {
         retstr += "\n";
      }
   }
   return retstr;
}

function swap(arr, index1, index2) {
   var temp = arr[index1];
   arr[index1] = arr[index2];
   arr[index2] = temp;
}

// Example 12-3, the bubble sort
// Example 12-5, adding a call to the toString() function of bubbleSort()
function bubbleSort() {
   for (var outer = this.dataStore.length; outer >= 2; --outer) {
      for (var inner = 0; inner <= outer-1; ++inner) {
         if (this.dataStore[inner] > this.dataStore[inner+1]) {
            swap(this.dataStore, inner, inner+1);
         }
      }
      print(this.toString());
   }
}

// Example 12-6, the selection sort
function selectionSort() {
   var min, temp;
   for (var outer = 0; outer <= this.dataStore.length-2; ++outer) {
      min = outer;
      for (var inner = outer + 1;
           inner <= this.dataStore.length-1; ++inner) {
         if (this.dataStore[inner] < this.dataStore[min]) {
            min = inner;
         }
      }
      swap(this.dataStore, outer, min);
   }
}

// Example 12-7, the insertion sort
function insertionSort() {
   var temp, inner;
   for (var outer = 1; outer <= this.dataStore.length-1; ++outer) {
      temp = this.dataStore[outer];
      inner = outer;
      while (inner > 0 && (this.dataStore[inner-1] >= temp)) {
         this.dataStore[inner] = this.dataStore[inner-1];
         --inner;
      }
      this.dataStore[inner] = temp;
   }
}

// Figure 12-3, the shellsort algorithm
function shellsort() {
   for (var g = 0; g < this.gaps.length; ++g) {
      for (var i = this.gaps[g]; i < this.dataStore.length; ++i) {
         var temp = this.dataStore[i];
         for (var j = i; j >= this.gaps[g] &&
                         this.dataStore[j-this.gaps[g]] > temp;
              j -= this.gaps[g]) {
            this.dataStore[j] = this.dataStore[j - this.gaps[g]];
         }
         this.dataStore[j] = temp;
      }
   }
}

function setGaps(arr) {
   this.gaps = arr;
}

// Example 12-13, a bottom-up merge sort JS implementation
// Example 12-14, merge sort added to the CArray class
function mergeSort(arr) {
   if (arr.length < 2) {
      return;
   }
   var step = 1;
   var left, right;
   while (step < arr.length) {
      left = 0;
      right = step;
      while (right + step <= arr.length) {
         mergeArrays(arr, left, left+step, right, right+step);
         left = right + step;
         right = left + step;
      }
      if (right < arr.length) {
         mergeArrays(arr, left, left+step, right, arr.length);
      }
      step *= 2;
   }
}

function mergeArrays(arr, startLeft, stopLeft, startRight, stopRight) {
   var rightArr = new Array(stopRight - startRight + 1);
   var leftArr = new Array(stopLeft - startLeft + 1);
   k = startRight;
   for (var i = 0; i < (rightArr.length-1); ++i) {
      rightArr[i] = arr[k];
      ++k;
   }

   k = startLeft;
   for (var i = 0; i < (leftArr.length-1); ++i) {
      leftArr[i] = arr[k];
      ++k;
   }

   rightArr[rightArr.length-1] = Infinity; // a sentinel value
   leftArr[leftArr.length-1] = Infinity; // a sentinel value
   var m = 0;
   var n = 0;
   for (var k = startLeft; k < stopRight; ++k) {
      if (leftArr[m] <= rightArr[n]) {
         arr[k] = leftArr[m];
         m++;
      }
      else {
         arr[k] = rightArr[n];
         n++;
      }
   }
   print("left array - ", leftArr);
   print("right array - ", rightArr);
}
