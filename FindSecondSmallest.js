function findSecondSmallestElement(arr) {
    if (arr.length < 2) {
        return "Error: Array should have at least two elements.";
    }

    let smallestElement = Infinity;
    let secondSmallestElement = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallestElement) {
            secondSmallestElement = smallestElement;
            smallestElement = arr[i];
        } else if (arr[i] < secondSmallestElement && arr[i] !== smallestElement) {
            secondSmallestElement = arr[i];
        }
    }

    if (secondSmallestElement === Infinity) {
        return "Error: No second smallest element found in the array.";
    }

    return secondSmallestElement;
}
