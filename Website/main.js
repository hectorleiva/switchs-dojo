//const myImage = document.querySelector("img");

 // myImage.onclick = () => {
   // const mySrc = myImage.getAttribute("src");
   // if (mySrc === "\\wsl.localhost\Ubuntu\home\aswitch\repo\switchs-dojo\Website\images\thumbs up.jpeg") {
      //myImage.setAttribute("src", "\\wsl.localhost\Ubuntu\home\aswitch\repo\switchs-dojo\Website\images\thumbs up.jpeg");
   // } else {
    //  myImage.setAttribute("src", "\\wsl.localhost\Ubuntu\home\aswitch\repo\switchs-dojo\Website\images\thumbs down.jpeg");
    //}
 // };
  
 function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
} 
let myButton = document.querySelector("button");
myButton.onclick = () => {
  setUserName();
};
let myHeading = document.querySelector("h1");