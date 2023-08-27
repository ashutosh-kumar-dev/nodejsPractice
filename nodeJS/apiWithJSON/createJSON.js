const fs = require("fs");

const obj = {
    name : "ashutosh",
    age :"20",
    gender : "male"
}

const jsonObj = JSON.stringify(obj);

fs.writeFile("apiData.JSON",jsonObj,(err)=>{
    console.log("written");
});

