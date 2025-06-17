"use strict";
class Sorter {
    constructor(collection) {
        this.collection = collection;
        this.collection = collection;
    }
    sort() {
        //simple bubble sort
        for (let i = 0; i < this.collection.length; i++) {
            for (let j = 0; j < this.collection.length - i - 1; j++) {
                if (this.collection[j] > this.collection[j + 1]) {
                    const temp = this.collection[j];
                    this.collection[j] = this.collection[j + 1];
                    this.collection[j + 1] = temp;
                }
            }
        }
    }
}
const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
