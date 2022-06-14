var postman = new XMLHttpRequest();
let path = "../complex/index.html";
postman.open("GET", path, false);
postman.send();
document.body.innerHTML = postman.responseText;