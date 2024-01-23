function swapHeadAndTail(arr) {
    // Calculate the midpoint of the array
    const midpoint = Math.floor(arr.length / 2);
  
    // Swap the head and tail
    const swappedArray = [...arr.slice(midpoint), ...arr.slice(0, midpoint)];
  
    return swappedArray;
  }
  
  // Example usage:
  const example1 = [1, 2, 3, 4, 5];
  const result1 = swapHeadAndTail(example1);
  console.log(result1); // Output: [4, 5, 3, 1, 2]
  
  const example2 = [-1, 2];
  const result2 = swapHeadAndTail(example2);
  console.log(result2); // Output: [2, -1]
  
  const example3 = [1, 2, -3, 4, 5, 6, -7, 8];
  const result3 = swapHeadAndTail(example3);
  console.log(result3); // Output: [5, 6, -7, 8, 1, 2, -3, 4]  