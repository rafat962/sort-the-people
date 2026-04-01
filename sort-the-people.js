// ---------------- selection sort  ----------------it took 12ms to run
/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */

// FN To get the Tallest one
const findTallest = (heights) => {
    let tallest = heights[0];
    let tallestIndex = 0;

    for (let i = 1; i < heights.length; i++) {
        if (heights[i] > tallest) {
            tallest = heights[i];
            tallestIndex = i;
        }
    }
    return tallestIndex;
};
// Main Function is responsible for the sorting logic
const sortPeople = (names, heights) => {
    let sortedNames = [];

    let copyHeights = [...heights];
    let copyNames = [...names];

    for (let i = 0; i < names.length; i++) {
        let tallestIndex = findTallest(copyHeights);

        sortedNames.push(copyNames[tallestIndex]);

        copyHeights.splice(tallestIndex, 1);
        copyNames.splice(tallestIndex, 1);
    }

    return sortedNames;
};

// ---------------- quickSort  ---------------- it took 16ms to run

// const quickSort = (pairs) => {
//     if (pairs.length <= 1) return pairs;

//     let pivot = pairs[0];

//     let larger  = pairs.slice(1).filter(p => p[1] > pivot[1]);
//     let smaller = pairs.slice(1).filter(p => p[1] < pivot[1]);

//     return [...quickSort(larger), pivot, ...quickSort(smaller)];
// };

// // FN for main logic
// const sortPeople = (names, heights) => {
//     let pairs = names.map((name, i) => [name, heights[i]]);
//     let sorted = quickSort(pairs);
//     return sorted.map(p => p[0]);
// };
