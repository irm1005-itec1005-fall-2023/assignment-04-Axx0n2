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
let w = [0];
let aForm = document.getElementById("userInput");
let bList = document.getElementById("listItems");
let cInput = document.getElementById("input");


aForm = document.addEventListener("submit", formInput);

function formInput(e) {
  event.preventDefault();

  w[0] = w[0] + 1; 


  let ID = w[0];
  let isCompleted = false;
  let text = cInput.value;
  let Obj = {id : ID, text : text, completed : isCompleted};


  todoItems.push(Obj);
  console.log(todoItems);
  //aForm.reset();
  renderData();










}

function renderData () {
  bList.innerHTML = "";

  for (let i = 0 ; i < todoItems.length ; i++) {
  
    let listItem = document.createElement("li");
    listItem.textContent = todoItems[i].text;

    let tempButton = document.createElement("button");

    tempButton.textContent = "Remove";

    tempButton.dataset.super = i;

    let mark = document.createElement("INPUT");
    mark.setAttribute("type", "checkbox");
    

    mark.addEventListener("click", function(event){
      console.log("checked");

      
      let x = todoItems[0].completed;
      console.log(x);
      x = true;
      const element = event.target;
      console.log(element);


      if (element.checked == true) {
        console.log("true")
        todoItems[].completed = true;
      }
      else {

        console.log("false");
        todoItems[].completed = false;
      }

     

    })

    tempButton.addEventListener("click", function(event){
    console.log("pressed")



      


    todoItems.splice(event.target.dataset.super, 1);

    renderData();

    
    });

    listItem.appendChild(tempButton);
    listItem.appendChild(mark);
    bList.appendChild(listItem);



  }
  function myFunction() {
    // Get the checkbox
    let checkBox = document.getElementById("myCheck");
    // Get the output text
    let text = document.getElementById("text");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
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