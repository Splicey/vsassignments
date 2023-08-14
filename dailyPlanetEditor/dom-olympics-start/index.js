var header = document.getElementById("header");
header.innerHTML = "JavaScript Made This!!";
header.style.fontSize = "25px";
header.align = "center";

var header2 = document.createElement("h2");
/* header2.insertAdjacentHTML allowed me to add my name inline with the h2 elememt to include a span style tag which allowed me to change the color of my name.  Adding an additinal line mirroring the same format allowed me to add "wrote the JavaScript" */

header2.insertAdjacentHTML(
  "beforeend",
  `<span style="color: purple"> Toni Griffin</code>`
);
header2.insertAdjacentHTML(
  "beforeend",
  `<span style="color: black"> wrote the JavaScript</code>`
);
// console.log(header2);
header.append(header2);
header2.style.fontSize = "25px";

// create variable to get element by class name <div class>
var message = document.getElementsByClassName("message");
//after you have drilled down to the message element start your message with (message.)
// the message class on the html document is considered an array [0,1,2,3]
// text content property is used to get the text content of a node and its descendants.
message[0].textContent = "Hello";
message[1].textContent = "Your website is amazing!";
message[2].textContent = "You have helped me save tons of time";
message[3].textContent = "I can't wait for the next tip!";
