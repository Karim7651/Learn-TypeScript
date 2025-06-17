import { NumbersCollection } from './NumbersCollection';
interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}
export abstract class Sorter {
  //by using |(union operator) we're only limited to refer to properties
  // & functions that exist in number[] & string
  //strings are immutable in js

  
  abstract length:number;
  //abstract methods have to be implemented by child class
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  sort(): void {
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
