function login(){

let email = document.getElementById("email").value
let pass = document.getElementById("password").value

if(email === "admin@bonsai.com" && pass === "1234"){

window.location.href = "dashboard.html"

}else{

alert("Usuario o contraseña incorrectos")

}

}


function mostrarPassword(){

let pass = document.getElementById("password")

if(pass.type === "password"){
pass.type = "text"
}else{
pass.type = "password"
}

}


function actualizar(){

fetch("http://localhost:1880/bonsai")

.then(res => res.json())

.then(data => {

document.getElementById("soil").innerText = data.soil + "%"
document.getElementById("temp").innerText = data.temp + "°C"

})

}