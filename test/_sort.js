const Sort = require("../src/Sort");
const { expect } = require("chai");

describe("Sort", () => {
  it("should be a function", () => {
    expect(Sort).to.be.a("function");
  });

  it("should have a sort method", () => {
    expect(Sort.prototype.sort).to.be.a("function");
  });

  it("should have a createTheMinHeap method", () => {
    expect(Sort.prototype.createTheMinHeap).to.be.a("function");
  });

  it("should have a minHeapComparisonCheck method", () => {
    expect(Sort.prototype.minHeapComparisonCheck).to.be.a("function");
  });

  it("should create a new instance of minHeapSort", () => {
    // setup
    const aNewInstance = new Sort([7, 6, 89, 10, 11, -12, -13]);
    // assert
    expect(aNewInstance).to.be.an("object");
  });

  it("should check that an array is passed as an argument when a new instance of minHeapSort is created", () => {
    // setup
    const aNewInstance = new Sort([7, 6, 89, 10, 11, -12, -13]);
    const passedInArray = [7, 6, 89, 10, 11, -12, -13];
    // assert
    expect(aNewInstance.array).to.deep.equal(passedInArray);
  });

  it("should request a new instance of the class be created if an array is not passed as an argument when a new instance of minHeapSort is created", () => {
    // setup
    const aNewInstance = new Sort();
    // assert
    expect(aNewInstance.array).to.deep.equal(undefined);
  });

  it("should return a minimum sorted array", () => {
    // setup
    const aNewInstance = new Sort([7, 6, 89, 10, 11, -12, -13]);
    const minSortedArray = [-13, -12, 6, 7, 10, 11, 89];
    // assert
    expect(aNewInstance.sort()).to.deep.equal(minSortedArray);
  });

  it("should NOT return a maximum sorted array", () => {
    // setup
    const aNewInstance = new Sort([7, 6, 89, 10, 11, -12, -13]);
    const maxSortedArray = [89, 11, 10, 7, 6, -12, -13];
    // assert
    expect(aNewInstance.sort()).to.not.deep.equal(maxSortedArray);
  });

  it("should return a minimum heap sorted array for a very small array", () => {
    // setup
    const aNewInstance = new Sort([2, 1]);
    const minSortedArray = [1, 2];
    // assert
    expect(aNewInstance.sort()).to.deep.equal(minSortedArray);
  });

  it("should return a minimum heap sorted array for a very large array", () => {
    // setup
    const aNewInstance = new Sort([
      2,
      1,
      8,
      7,
      3,
      6,
      1234567890,
      -1234567890,
      4,
      9,
      5,
      87654,
      10,
      20,
      -432,
      -99999,
      -21,
      11,
      13,
      15,
      12,
      16,
      17,
      14,
      18,
      -567,
      832,
      -91,
      19,
      71,
      90,
      44,
      63,
      72,
      59,
      445,
      31,
      -8,
      -21,
    ]);
    const minSortedArray = [
      -1234567890,
      -99999,
      -567,
      -432,
      -91,
      -21,
      -21,
      -8,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      31,
      44,
      59,
      63,
      71,
      72,
      90,
      445,
      832,
      87654,
      1234567890,
    ];
    // assert
    expect(aNewInstance.sort()).to.deep.equal(minSortedArray);
  });

  it("should account for duplicate numbers by placing them next to each other", () => {
    // setup
    const aNewInstance = new Sort([2, 3, 1, 8, 2, 1, 8, 3]);
    const minSortedWithDupesArray = [1, 1, 2, 2, 3, 3, 8, 8];
    // assert
    expect(aNewInstance.sort()).to.deep.equal(minSortedWithDupesArray);
  });
});
