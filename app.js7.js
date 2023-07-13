function countEvenOdd(arr) {
    let evenCount = 0;
    let oddCount = 0;
    let zeroCount = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "number") {
        if (arr[i] === 0) {
          zeroCount++;
        } else if (arr[i] % 2 === 0) {
          evenCount++;
        } else {
          oddCount++;
        }
      }
    }
  
    console.log("Чётных элементов:", evenCount);
    console.log("Нечётных элементов:", oddCount);
    console.log("Нулей:", zeroCount);
  }
  const array = [1, 2, 3, 4, 5, 0, "a", null];
  countEvenOdd(array);