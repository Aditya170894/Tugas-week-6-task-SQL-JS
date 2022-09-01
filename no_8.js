const transaction = [
    { id: 1, totalPrice: 652000, day: "senin"},
    { id: 2, totalPrice: 245000, day: "selasa"},
    { id: 3, totalPrice: 214000, day: "rabu"},
    { id: 4, totalPrice: 664000, day: "kamis"},
    { id: 5, totalPrice: 144000, day: "minggu"},
    { id: 6, totalPrice: 422000, day: "sabtu"},
    { id: 7, totalPrice: 263000, day: "minggu"},
    { id: 8, totalPrice: 655000, day: "rabu"},
    { id: 9, totalPrice: 426000, day: "selasa"},
    { id: 10, totalPrice: 512000, day: "kamis"}
];

const temporary = {};
transaction.forEach((item) => {
    const key = item.day;
    if (temporary[key] === undefined) {
        temporary[key] = {
            day: item.day,
            totalPrice: item.totalPrice
        }
    } else {
        temporary[key].totalPrice += item.totalPrice;
    }
});

const result = Object.keys(temporary).map((i) => temporary[i]);
console.log(result);