console.log("Hello");

let urls = require("./urls");

for (let i=0; i < urls.length; i++){

    let url = urls[i];

    console.log(url[0], url[1], url[2]);

}