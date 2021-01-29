var para = document.createElement("p");
var node = document.createTextNode("Made by Wreper12 || version 1.0.0");
para.appendChild(node);
var element = document.getElementById("footer");
element.appendChild(para);

var img = document.createElement("img");
var images = ["codescreen", "CSSscreen", "discordbothelp"]; 
img.src = `./assets/images/html.png`;
var src = document.getElementById("header");
src.appendChild(img);