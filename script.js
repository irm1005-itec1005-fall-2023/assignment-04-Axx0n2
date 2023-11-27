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
        listItem.dataset.super = i;
        console.log(listItem.id);


        
        listItem.id = true;
        /*
        if (buttonRemove.style.visibility == "visible") {
                
            buttonRemove.style.visibility = "visible";
            
            listItem.id=false;
            box.style.backgroundColor = "black";
        }
        
        */
        listItem.class="listID";


        let buttonRemove = document.createElement("button");
        buttonRemove.id = "mark";


        
        buttonRemove.dataset.super = i;
        console.log(buttonRemove.dataset.super);


     

        buttonRemove.style.visibility = "hidden";
        

        buttonRemove.addEventListener("click", function(event){
            console.log("you clicked on:", event.target.dataset.super, 1);

            //buttonRemove.id = true;
            array.splice(event.target.dataset.super, 1);

            renderData();

            //console.log(typeCount[i].type + " - " + typeCount[i].count)

        });

        let box = document.createElement("button");
        //box.textContent = "done";
        box.dataset.super = i;
        box.id = "butter";
      
  /*

*/
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



        listItem.append(" ");
        listItem.append(box);
        listItem.append(" ");
        listItem.appendChild(buttonRemove);
        list.appendChild(listItem);
        
    }


}


done.addEventListener("click", function(){
    //array.splice(event.target.dataset.super, 1);
    let v = document.getElementsByClassName("listID");
    
    console.log(array);
    


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