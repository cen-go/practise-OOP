const button = document.querySelector("button");

const buttonClickHandler = event => console.log(event);

// button.onclick = buttonClickHandler;
button.addEventListener("click", buttonClickHandler);

// setTimeout(() => button.removeEventListener("click", buttonClickHandler), 5000);

const firstDiv = document.getElementById("first-div");
let curElementNumber = 0;

firstDiv.textContent = curElementNumber;

function scrollHandler() {
  const distToBottom = document.body.getBoundingClientRect().bottom;

  if (distToBottom < document.documentElement.clientHeight + 100) {
    const newDataElement = document.createElement("div");
    newDataElement.className = "long-div";
    curElementNumber++;
    newDataElement.textContent = curElementNumber;
    document.body.append(newDataElement);
  }
}

window.addEventListener("scroll", scrollHandler);

const form = document.querySelector("form");
form.addEventListener("submit", event => {
  event.preventDefault();
  console.log(event);
});

const listItems = document.querySelectorAll("li");
const list = document.querySelector("ul");

//this method is a little cumbersome adds too many event listener
// listItems.forEach(item => 
//   item.addEventListener("click", event => {
//     event.target.classList.toggle("highlight")
//   })
// )

list.addEventListener("click", event => {
  event.target.closest("li").classList.toggle("highlight");    
});