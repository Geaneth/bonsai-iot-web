function login(){

let email=document.getElementById("email").value
let pass=document.getElementById("password").value

if(email=="admin" && pass=="1234")
{
window.location="dashboard.html"
}
else
{
alert("Usuario incorrecto")
}

}

/////////////////////////////////////////////////////

function actualizar(){

fetch("http://localhost:1880/bonsai")

.then(res=>res.json())

.then(data=>{

document.getElementById("soil").innerText=data.soil+"%"
document.getElementById("temp").innerText=data.temp+"°C"
document.getElementById("pump").innerText=data.pump

})

}