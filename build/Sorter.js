"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    sort() {
        //one approach is to check if it's an array of numbers and apply array logic
        //otherwise if it is a string we can write another algorithm
        //not efficient (DRY)
        const { length } = this; //collection.length property
        //simple bubble sort
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
