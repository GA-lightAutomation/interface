var postman = new XMLHttpRequest();
let path = "https://raw.githubusercontent.com/GA-lightAutomation/interface/main/complex/index.html";
postman.open("GET", path, false);
postman.send();
document.body.innerHTML = postman.responseText;