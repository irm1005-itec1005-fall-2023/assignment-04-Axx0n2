// C0onstants
const appID = "app";
const headingText = "To do. To done. ✅";

//inialised elements
let appContainer = document.getElementById(appID);
let array = [];



let form = document.getElementById("userInput");
let list = document.getElementById("listItems");
let input = document.getElementById("input");




let done = document.getElementById("btn-1");





form = document.addEventListener("submit", formInput);

//enters user input to array
function formInput(event) {
    event.preventDefault();


    array.push(input.value);
    document.getElementById("userInput").reset();
    renderData();

}
//renders data as an unordered list based on array elements
function renderData() {

 

    list.innerHTML = "";
    
    for (let i = 0; i < array.length ; i++) {
        let listItem = document.createElement("li");

        listItem.textContent = array[i];

        listItem.dataset.super = i;
        console.log(listItem.id);


        listItem.id = true;//sets list item to uncompleted

        listItem.class="listID";



        //creating the delete button, setting values, and hiding element from view
        let buttonRemove = document.createElement("button");
        buttonRemove.id = "mark";
        buttonRemove.dataset.super = i;
        console.log(buttonRemove.dataset.super);
        buttonRemove.style.visibility = "hidden";
        
        //function for removing list item
        buttonRemove.addEventListener("click", function(event){
            console.log("you clicked on:", event.target.dataset.super, 1);


            array.splice(event.target.dataset.super, 1);//item is removed from list

            renderData();//rerender list from array

  

        });


        //create toggle button
        let box = document.createElement("button");

        box.dataset.super = i;
        box.id = "butter";
      
        //function to reveal or hide deleat button, sets id of list element to completed or not
        box.addEventListener("click", function(event){
            
            
            

            if (buttonRemove.style.visibility == "hidden") {
                
                buttonRemove.style.visibility = "visible";
                
                listItem.id=false;
                box.style.backgroundColor = "black";
            }
            else  {
                buttonRemove.style.visibility = "hidden";
               
                listItem.id=true;
                box.style.backgroundColor = "white";
            }


        })


        //add together elements, and add to list
        listItem.append(" ");
        listItem.append(box);
        listItem.append(" ");
        listItem.appendChild(buttonRemove);
        list.appendChild(listItem);
        
        
    }


}

//function to remove all completed items from list and array
done.addEventListener("click", function(){


    for (i = array.length ; i > 0 ; i = i -1) {
        x = list.children[i-1].id;
        console.log(x);
        if (x == 'false') {
            console.log("X");
            
            array.splice(i-1, 1);
            

            
            
        }
        
    }
    
    renderData(); 
    
})











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
 // inititialise();