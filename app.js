//requerimos express
const express = require("express");
const app = express();
//requerimos path
const path = require("path");

//definimos lugar de archvos estaticos
app.use(express.static(path.resolve(__dirname,"./public")));

//configuramos servidor
app.listen(3000,avisoServidor);

//muestra de paginas
app.get("/",home);



//funciones 

//funcion: avisoServidor
//def: muestra por consola "Servidor levantado"
//by Tade0G
function avisoServidor(){
	console.log("Servidor levantado");
}

function home(req,res){
	res.sendFile(path.resolve(__dirname,"./views/home.html"));
}
