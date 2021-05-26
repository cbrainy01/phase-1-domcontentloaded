// Your code goes here
document.addEventListener("DOMContentLoaded", replaceText);

function replaceText(event) {
const paragraph = document.querySelector("p#text");
paragraph.textContent = "This is really cool!";
}