/*
// querySelector
const heading = document.querySelector(".header__text h2"); //Return 0 or 1 elements
heading.textContent = "Text";

// querySelectorAll
const heading2 = document.querySelectorAll(".navigation a"); //Return 0 or all elements
heading2[0].textContent = "About me wtf";

// getElementByID
const heading3 = document.getElementById('heading');
console.log(heading3);

// Create html code
const newLink = document.createElement("A");
// Add href
newLink.href = "new-link.html";
// Add text
newLink.textContent = "New Link";
// Add class
newLink.classList.add("navigation__link");
// Add to document
const navigation = document.querySelector(".navigation");
navigation.appendChild(newLink);

console.log(newLink)
*/

/*
Events
console.log(1);
window.addEventListener("load",()=> console.log(2)); // load wait the js and files of website are ready
window.onload = ()=> console.log(5); //window.addEventListener("Load") === window.onload
document.addEventListener("DOMContentLoaded",()=> console.log(4)); // Just wait the html are ready
window.onscroll = ()=> console.log("scroll...");
*/

/* Select elements and associate a event
const sendBtn = document.querySelector(".button--primary");
sendBtn.addEventListener("click",event=>{
    console.log(event);
    event.preventDefault();
    // Form validation
    console.log("Sending form...");
});
*/

// Inputs and textarea events
const data = {
    name: "",
    email: "",
    message: "",
}

const name_ = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const form = document.querySelector(".form")

name_.addEventListener("input",readText);
email.addEventListener("input",readText);
message.addEventListener("input",readText);

/*
Another form
name_.addEventListener("input",e=> console.log(e.target.value));
email.addEventListener("input",e=> console.log(e.target.value));
message.addEventListener("input",e=> console.log(e.target.value));
*/ 

// Submit Event
form.addEventListener("submit",e=>{
    e.preventDefault();
    // Form validation
    const {name,email,message} = data;
    if(name === "" || email === "" || message === ""){
        showAlert("All fields are required","error");
        return; // Stop code ejecution
    }
    // Send the form and create the alert
    showAlert("Sent successfully")
});

function readText(e){
    // console.log(e.target.value);
    data[e.target.id] = e.target.value;
};
function showAlert(message,error=null){
    const alert = document.createElement("P");
    alert.textContent = message;
    if(error){
        alert.classList.add("error");
    }else{
        alert.classList.add("success")
    }
    form.appendChild(alert);
    //Disappear after 4s
    setTimeout(() => {
        alert.remove();
    }, 5000);
}