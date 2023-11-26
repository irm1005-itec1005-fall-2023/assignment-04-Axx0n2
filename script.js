// C0onstants
const appID = "app";
const headingText = "To do. To done. ✅";


let appContainer = document.getElementById(appID);
let array = [];



let form = document.getElementById("userInput");
let list = document.getElementById("listItems");
let input = document.getElementById("input");




let done = document.getElementById("btn-1");
//done = document.addEventListener("click", clearMarked);


form = document.addEventListener("submit", formInput);


function formInput(event) {
    event.preventDefault();


    array.push(input.value);
    document.getElementById("userInput").reset();
    renderData();

}

function renderData() {

    //console.log(array);

    list.innerHTML = "";
    
    for (let i = 0; i < array.length ; i++) {
        let listItem = document.createElement("li");

        listItem.textContent = array[i];
        //listItem = "false";
        let tempArray = [];
        Obj = {}
        listItem.dataset.super = i;
        listItem.id = false;
        listItem.class="listID";


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
        box.dataset.super = i;
        box.id = "butter";

        box.addEventListener("click", function(event){
            
            if (buttonRemove.style.visibility == "hidden") {
                
                buttonRemove.style.visibility = "visible";
                //listItem.dataset.super = true;
                listItem.id=true;
            }
            else  {
                buttonRemove.style.visibility = "hidden";
                //listItem.dataset.super = false;
                listItem.id=false;
            }


        })

        done.addEventListener("click", function(event){
            //array.splice(event.target.dataset.super, 1);
            let v = document.getElementsByClassName("listID");

            for (let i = 0; i < array.length ; i++) {
                console.log(v);

                if (v.id == 'true') {
                    console.log("removedElements")
                    array.splice(v.dataset.super, 1);

                }
                
                
            }

            //renderData();
        })

        
        listItem.append(box);
        listItem.appendChild(buttonRemove);
        list.appendChild(listItem);
    }


}






function clearMarked() {
    let v = document.getElementById("listID");

    for (let i = 0; i < array.length ; i++) {
        console.log(array);
        console.log(v);

        if (v.dataset.super == 'true') {
            console.log("removedElement")

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