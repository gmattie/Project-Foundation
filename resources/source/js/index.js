import projectFoundation from "./modules/projectFoundation";

const element = document.createElement("div");
element.textContent = projectFoundation();

document.body.appendChild(element);