function findMostFrequentElement(arr) {
    // Create an object to store the frequency count of each element
    const frequencyCount = {};

    // Loop through the array and count the frequency of each element
    arr.forEach(element => {
        if (frequencyCount[element]) {
            frequencyCount[element]++;
        } else {
            frequencyCount[element] = 1;
        }
    });

    // Find the element with the highest frequency
    let mostFrequentElement;
    let maxFrequency = 0;

    for (const element in frequencyCount) {
        if (frequencyCount[element] > maxFrequency) {
            mostFrequentElement = element;
            maxFrequency = frequencyCount[element];
        }
    }

    return mostFrequentElement;
}

const inputArray = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const result = findMostFrequentElement(inputArray);
console.log(result);
