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
app.get("/register",register);
app.get("/login",login);


//funciones 

//funcion: avisoServidor
//def: muestra por consola "Servidor levantado"
//by Tade0G
function avisoServidor(){
	console.log("Servidor levantado");
}

//funcion: home
//def: envia el home.html
//by Tade0G
function home(req,res){
	res.sendFile(path.resolve(__dirname,"./views/home.html"));
}

//funcion: register
//def: envia el register.html
//by Tade0G
function register(req,res){
	res.sendFile(path.resolve(__dirname,"./views/register.html"));
}

//funcion: login
//def: envia el login.html
//by Tade0G
function login(req,res){
	res.sendFile(path.resolve(__dirname,"./views/login.html"));
}