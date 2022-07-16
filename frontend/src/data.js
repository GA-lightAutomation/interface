let baseURL = window.location.href;
baseURL = "http://127.0.0.1:5000/"; //uncomment when using npm server
console.log("Base URL: "+baseURL)

const request = new XMLHttpRequest();

function postman(command){
    //e.preventDefault();
    console.log(command)
    request.open('GET', baseURL + "/command?command="+command, false);  // `false` makes the request synchronous
    request.send(null);
}

export {baseURL, postman};