import { Sorter } from "./Sorter";
//implicitly implements Sortable interface
export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super()
    this.data = data
  }
  //getters are called like this
  //collection.length not collection.length()
  get length(): number {
    return this.data.length;
  }
  swap(leftIndex: number, rightIndex: number): void {
    const temp = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = temp;
  }
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }
}
