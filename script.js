/* Assignment 04: Finishing a Todo List App
 *
 * 
 *
 */


//
// Variables
//

//let todoItems = []; //Inialised array
//let w = [0]; //Counter for ID

// C0onstants
const appID = "app";
const headingText = "To do. To done. ✅";

//const btn = document.querySelector("#btn-1");
//const remove = document.querySelector("#gone");

// DOM Elements
let appContainer = document.getElementById(appID);

//
// Functions
//


let todoItems = [];
let aForm = document.getElementById("userInput");
let bList = document.getElementById("listItems");
let cInput = document.getElementById("input");


aForm = document.addEventListener("submit", formInput);

function formInput(e) {
  event.preventDefault();

  todoItems.push(cInput.value);
  //aForm.reset();
  renderData();

  console.log(cInput.type);
  text = cInput;








}

function renderData () {
  bList.innerHTML = "";

  for (let i = 0 ; i < todoItems.length ; i++) {
  
    let listItem = document.createElement("li");
    listItem.textContent = todoItems[i];

    let tempButton = document.createElement("button");

    tempButton.textContent = "Remove";

    tempButton.dataset.super = i;

    tempButton.addEventListener("click", function(event){
    console.log("pressed")

    todoItems.splice(event.target.dataset.super, 1);

    renderData();

    
    });

    listItem.appendChild(tempButton);

    bList.appendChild(listItem);



  }


}





// Add a heading to the app container
function inititialise() {
  // If anything is wrong with the app container then end
  if (!appContainer) {
    console.error("Error: Could not find app contianer");
    return;
  }

  // Create an h1 and add it to our app
  const h1 = document.createElement("h1");
  h1.innerText = headingText;
  appContainer.appendChild(h1);

  // Init complete
  console.log("App successfully initialised");
}

//
// Inits & Event Listeners
//
inititialise();