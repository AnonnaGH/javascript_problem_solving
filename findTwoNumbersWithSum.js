function findIndicesOfTwoNumbersWithSum(arr, target) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while (leftIndex < rightIndex) {
        const sum = arr[leftIndex] + arr[rightIndex];

        if (sum === target) {
            return [leftIndex, rightIndex];
        } else if (sum < target) {
            leftIndex++;
        } else {
            rightIndex--;
        }
    }

    return null; // Return null if no such pair is found
}

const inputArray = [1, 3, 6, 8, 11, 15];
const targetValue = 9;
const result = findIndicesOfTwoNumbersWithSum(inputArray, targetValue);
console.log(result);

