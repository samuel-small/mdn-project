console.log("Javascript works");

// Change title text
let myHeading = document.querySelector("h1"); 
myHeading.textContent = "Hello World!";

// Ask users country
let country = prompt("Where are you from?");
if (!country) {
    country = "Unknown"; // if inactive
}

if (country.toLowerCase() === "france") {
    alert("Me too! Come leave a comment on my blog! https://samuel-small-talk.com/");
} else {
    alert("I am far from you but you can leave a comment on my blog! https://samuel-small-talk.com/");
}

// click follow
let clickCount = 0;
document.querySelector("html").addEventListener("click", function () {
    clickCount++;
    console.log("Nombre de clics :", clickCount);

    if (clickCount > 20) {
        alert("You click a lot! Very well I hope you like it!");
    }
});

// click change picture
let myImage = document.querySelector("img");

myImage.addEventListener("click", function () {
    let mySrc = myImage.getAttribute("src");
    console.log("Image actuelle :", mySrc);

    if (mySrc.includes("firefox-icon")) {
        myImage.setAttribute("src", "images/image-js.webp");
    } else {
        myImage.setAttribute("src", "images/firefox-icon.png");
    }
});

// Username Query
let myButton = document.querySelector("button");

function setUserName() {
    let myName = prompt("Type your name.");
    if (!myName) return;

    localStorage.setItem("nom", myName);
    myHeading.textContent = "Mozilla est cool, " + myName;
    console.log("Name saved :", myName);
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    myHeading.textContent = "Mozilla est cool, " + localStorage.getItem("name");
}

myButton.addEventListener("click", setUserName);