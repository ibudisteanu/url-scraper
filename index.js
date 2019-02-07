console.log("Hello");

var rp = require('request-promise');
var sanitize = require("sanitize-filename");

let urls = require("./urls");

const fs = require('fs');

async function process(urls){

    for (let i=0; i < urls.length; i++){

        let url = urls[i];

        console.log( url[1]);

        let trials = 0;
        while (trials < 10){

            try{
                let out = await rp( "https://web.archive.org/web/" + url[1] );
                //console.log(out);
                if (!out) throw "invalid out";

                let filename = url[0]+"_"+url[1];
                filename = sanitize(filename);

                filename = filename.replace("_httpluhan.ro80", "")
                filename = filename.replace("_httpluhan.ro", "")

                await fs.writeFileSync("./pages/"+filename+".html", out );

                break;

            } catch (exception){
            }

            trials ++;
        }

    }

}


process(urls);