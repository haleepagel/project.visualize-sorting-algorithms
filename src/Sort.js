"use strict";
class minHeapSort {
  constructor(array) {
    if (!array) {
      console.log(
        "Please create a new instance of minHeapSort & pass an array as an argument."
      );
      return;
    }
    this.array = array;
    this.unsortedArraySize = array.length;
  }
  // the sort method kicks things off and (pardon the pun) it sort of acts as ground control for the other methods
  sort() {
    console.log("Let's create our minHeapSort!");
    // we'll get things started by creating the minHeap
    this.createTheMinHeap();

    // the for loop below will switch index 0 and the end element
    // we'll decrease this.arraySize because we know with each iteration
    // the array becomes more sorted at the right side
    for (let i = this.array.length - 1; i >= 0; i--) {
      // arrays are passed by reference, create a new variable for this.array in order to access it inside the context of the switchPlaces function
      const arr = this.array;
      // I know writing switchPlaces twice in the code is anti-D.R.Y. but I couldn't figure out how to make it a method and still access this.array inside
      function switchPlaces(x, y) {
        // create a temp var to hold onto the value before we replace it
        let temporaryValueHolder = arr[x];
        arr[x] = arr[y];
        arr[y] = temporaryValueHolder;
        return arr;
      }
      switchPlaces(0, i);
      // now that we bubbled the largest number to the top and switched its place with the last element in the array
      // let's decreased the size of this.unsortedArraySize because we know that the far right element is locked in place
      // no need to bother checking it again
      this.unsortedArraySize--;
      // after we have decreased the size of this.unsortedArraySize we start the whole thing over again and bubble up the next highest value
      this.minHeapComparisonCheck(0);
    }
    console.log("All finished! Here is the minHeapSort: " + this.array);
    return this.array;
  }
  // the createTheMinHeap method finds the last group of parent/child elements and then runs minHeapComparisonCheck with that group
  createTheMinHeap() {
    // because of the work of brilliant mathematical minds, the formula for finding all of the parent elements is as follows:
    for (let i = Math.floor(this.array.length - 1 / 2); i >= 0; i--) {
      this.minHeapComparisonCheck(i);
    }
  }
  // the minHeapComparisonCheck method will compare the parent and child elements
  minHeapComparisonCheck(j) {
    // once again, brilliant mathematical minds have proved that finding the leftChild index is the below formula:
    // i diagrammed this out on my mini-whiteboard and it worked! Math is magic.
    let leftChild = 2 * j + 1;
    // and those same brilliant mathematical minds went on and proved how to find the rightChild index!
    let rightChild = 2 * j + 2;

    let indexOfLargestNumFromParentChildComparison = j;

    if (
      leftChild < this.unsortedArraySize &&
      this.array[leftChild] > this.array[j]
    ) {
      indexOfLargestNumFromParentChildComparison = leftChild;
    }
    if (
      rightChild < this.unsortedArraySize &&
      this.array[rightChild] >
        this.array[indexOfLargestNumFromParentChildComparison]
    ) {
      indexOfLargestNumFromParentChildComparison = rightChild;
    }
    // if indexOfLargestNumFromParentChildComparison is REASSIGNED
    // that means we need to officially switch the indexes of the parent element and one of the children
    if (indexOfLargestNumFromParentChildComparison != j) {
      // arrays are passed by reference, create a new variable for this.array in order to access it inside the context of the switchPlaces function
      const arr = this.array;
      // I know writing switchPlaces twice in the code is anti-D.R.Y. but I couldn't figure out how to make it a method and still access this.array inside
      function switchPlaces(x, y) {
        // create a temp var to hold onto the value before we replace it
        let temporaryValueHolder = arr[x];
        arr[x] = arr[y];
        arr[y] = temporaryValueHolder;
        return arr;
      }
      switchPlaces(j, indexOfLargestNumFromParentChildComparison);
      // after the official switch has been made
      // let's do this check once more to compare if the unswitched child is greater than this updated value at indexOfLargestNumFromParentChildComparison
      this.minHeapComparisonCheck(indexOfLargestNumFromParentChildComparison);
    }
  }
}

module.exports = minHeapSort;
