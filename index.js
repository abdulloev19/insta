const express = require("express");
const fs = require("fs");
    
const app = express();
const jsonParser = express.json();
  
app.use(express.static(__dirname + "/static"));
  
const filePath = "users.json";
app.get("/api/users", function(req, res){
       
    const content = fs.readFileSync(filePath,"utf8");
    const users = JSON.parse(content);
	console.log(users)
    res.send(users);
});


app.listen(4000, function(){
    console.log("Сервер ожидает подключения...");
});

