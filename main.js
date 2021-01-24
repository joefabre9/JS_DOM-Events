/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this" */
let node1 = document.getElementById("node1");
// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
let node2 = document.getElementsByClassName("node2")[0];
// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
let h3_list = document.getElementsByTagName("h3");

node1.innerHTML = "I used the getElementByID('node1') method to access this";
node2.innerHTML = "I used the getElementbyClassName('node2') method to access this";

for (let i=0; i < h3_list.length; i++) {
    h3_list[i].innerHTML = "I used the getElementbyTagName('h3') method to access all the h3 tags";
}

/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a text node using this element.createElement() and put this text inside "This node was created using the createElement() method"
let p = document.getElementByID("parent");

let para1 = document.createElement("p");
para1.innerHTML = "Child Node #1 - This node was created using the createElement() method";
p.appendChild(para1);

let myNode = document.createTextNode("Child Node #2 - ...");
p.insertBefore(myNode, para1);

// TODO: Append the created node to the parent node using the element.appendChild() method
let parent = document.getElementsByID("exercise3");
let n1 = document.getElementByID("N1");
let newChild = createElement("p");
newChild.textContent = "New Kid on the Block";
newChild.style.textAlign = "center";
n1 = parent.replaceChild(newChild, n1);

let node = document.getElementByID("exercise3");
if (node.parentNode){
    node.parentNode.removeChilde(node);
}
// TODO: Create a text node using this element.createTextNode() and put this text inside "This node was created using the createTextNode() method"

// TODO: Insert the created text node after the parent but before the one you just created using the element.insertBefore() method

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with the "New Child Node"
// TODO: Remove the "New Child Node"

/*----------- Exercise #4: ANIMATIONS ----------- */

// TODO: Write your JavaScript here to make the red box go from right to left
// BONUS - Make the red box go all the way around the perimeter of the green box */

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which alerts the user this message -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"

