/* Example Code
      The following is just some example code for you to play around with.
      No need to keep this---it's just some code so you don't feel too lonely.
*/

// How can we use require here if it's frontend? We can thank webpack.
const Sort = require("./Sort");

// A link to our styles!
require("./index.css");

function createCheesyTitle(slogan) {
  const container = document.createElement("h1");
  const textNode = document.createTextNode(slogan);
  container.appendChild(textNode);
  return container;
}

const title = createCheesyTitle("The Heap Sort Algorithm Visualized!");
document.getElementById("title").appendChild(title);

// let's create an area to hold our BEFORE and AFTER visualization
// const beforeAndAfterArea = document.createElement("div");
// beforeAndAfterArea.id = "beforeAndAfterArea";
// const beforeAndAfterAreaTextNode = document.createTextNode(
//   "Before and After Heap Sort"
// );
// beforeAndAfterArea.appendChild(beforeAndAfterAreaTextNode);
// document.body.append(beforeAndAfterArea);

// append BEFORE ARRAY [ 1, 3, 2 ] to the DOM with sort.sort
const sort = new Sort([7, 6, 89, 10, 11, -12, -13]);
document.createElement("div");
document.classList = "visualization";
document.id = "beforeData";
const unsortedData = sort.array;
document.getElementById("before").append("[" + unsortedData + "]");
// then append the AFTER ARRAY [ 1, 2, 3] to the DOM with sort.sort
document.createElement("div");
document.classList = "visualization";
document.id = "afterData";
const sortedData = sort.sort();
document.getElementById("after").append("[" + sortedData + "]");
// put each array number in a div, then change the size/look of the div to match the number

/*
    A simple example of how you can make your project a bit more
    interactive, if you would like.

    In our `index.html` page, we have a short form.
    Here is the code that talks to it.
  */
function changeTitle(event) {
  event.preventDefault();
  console.log("What is an event?", event);
}

const form = document.querySelector("form");
document.addEventListener("DOMContentLoaded", () => {
  form.onsubmit = changeTitle;
});
