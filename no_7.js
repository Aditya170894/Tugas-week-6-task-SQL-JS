function findHighestProfit(array) {
    let maxIndex = 0;
    let maxValue = array[0];
    let minValue = array[0];
    array.forEach((value, index) => {

        if (maxValue < value) {
            maxValue = value;
            maxIndex = index;
        }
    });

    const arrayForMin = array.slice(0, maxIndex);
    if (maxIndex > 0) {
        minValue = Math.min(...arrayForMin)
    }

    const profit = maxValue - minValue;
    if (profit <= 0) {
        return 'Tidak bisa mendapatkan profit pada hari-hari ini'
    } 

    return profit;

}

const result1 = findHighestProfit([10, 2, 11, 20, 3, 5]); 
const result2 = findHighestProfit([33, 29, 11, 3])

console.log(result1, result2);