// C0onstants
const appID = "app";
const headingText = "To do. To done. ✅";


let appContainer = document.getElementById(appID);
let array = [];
let w = [0];


let form = document.getElementById("userInput");
let list = document.getElementById("listItems");
let input = document.getElementById("input");


form = document.addEventListener("submit", formInput);


function formInput(event) {
    event.preventDefault();

    w[0] = w[0] + 1; 
    array.push(input.value);
    document.getElementById("userInput").reset();
    renderData();

}

function renderData() {

    console.log(array);

    list.innerHTML = "";
    x =   w[0];; 
    for (let i = 0; i < array.length ; i++) {
        let listItem = document.createElement("li");

        listItem.textContent = array[i];

        let buttonRemove = document.createElement("button");

        buttonRemove.textContent = "remove";

        buttonRemove.dataset.super = i;
        console.log(buttonRemove.dataset.super);

        buttonRemove.style.visibility = "hidden";

        buttonRemove.addEventListener("click", function(event){
            console.log("you clicked on:", event.target.dataset.super, 1);


            array.splice(event.target.dataset.super, 1);

            renderData();

            //console.log(typeCount[i].type + " - " + typeCount[i].count)

        });

        let box = document.createElement("button");
        box.textContent = "done";
        //box.setAttribute("type", "checkbox");
        box.dataset.super = i;

        box.addEventListener("click", function(event){
            
            console.log(box);
            x = buttonRemove.dataset.super;
            console.log(x);
            console.log(buttonRemove);
            if (buttonRemove.style.visibility == "hidden") {
                console.log("found");
                buttonRemove.style.visibility = "visible";
            }
            else  {
                buttonRemove.style.visibility = "hidden";
                console.log("huh?");
            }


        })

        
        listItem.append(box);
        listItem.appendChild(buttonRemove);
        list.appendChild(listItem);
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