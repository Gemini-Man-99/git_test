// your JavaScript file
/*const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const para = document.createElement("p");
para.textContent = "hey i'm red!";
para.style.color = "red";
content.appendChild(para);

const heading = document.createElement("h3");
heading.textContent = "i'm a blue h3!";
heading.style.color = "blue";
content.appendChild(heading);

const innerContent = document.createElement("div");
innerContent.setAttribute("style", "border: 1px solid black; background-color: pink;");


const heading2 = document.createElement("h1");
heading2.textContent= "i'm in a div"

const para2 = document.createElement("p");
para2.textContent = "ME TOO!";

innerContent.appendChild(heading2);
innerContent.appendChild(para2);

container.appendChild(innerContent);*/

const btn = document.querySelector("#btn");

btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});

