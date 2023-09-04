function secondLargest(arr) {
  if (arr.length < 2) {
    return "Array should have at least two numbers";
  }

  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

// Example usages:
console.log(secondLargest([23, 66, 50, 12, 6])); // Output: 50
console.log(secondLargest([65, 34, 100, 22, 85])); // Output: 85
console.log(secondLargest([67, 22, 19, 12, 80])); // Output: 67

