//requerimos express
const express = require("express");
const app = express();
//requerimos path
const path = require("path");

app.listen(3000,avisoServidor);

//funciones 

//avisoServidor
//funcion: muestra por consola "Servidor levantado"
//by GomezLucas
function avisoServidor(){
	console.log("Servidor levantado");
}
