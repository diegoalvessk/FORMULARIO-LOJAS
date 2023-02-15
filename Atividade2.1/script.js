function handleChangeName(event) {
    window.localStorage.setItem("nome" , event.target.value)
}

function handleChangeEndereco(event) {
    window.localStorage.setItem("endereco" , event.target.value)
}

function handleChangeSegunda(event) {
    window.localStorage.setItem("segunda" , event.target.value)
}

function handleChangeTerca(event) {
    window.localStorage.setItem("terca" , event.target.value)
}

function handleChangeQuarta(event) {
    window.localStorage.setItem("quarta" , event.target.value)
}


function handleChangeQuinta(event) {
    window.localStorage.setItem("quinta" , event.target.value)
}

function handleChangeSexta(event) {
    window.localStorage.setItem("sexta" , event.target.value)
}

function handleChangeSabado(event) {
    window.localStorage.setItem("sabado" , event.target.value)
}

function handleChangeDomingo(event) {
    window.localStorage.setItem("domingo" , event.target.value)
}

function handleChangeHorarioA(event) {
    window.localStorage.setItem("horarioA" , event.target.value)
}

function handleChangeHorarioF(event) {
    window.localStorage.setItem("horarioF" , event.target.value)
}

function handleSubmit(event) {
   console.log(window.localStorage.getItem("nome"))
   console.log(window.localStorage.getItem("endereco"))
   console.log(window.localStorage.getItem("segunda"))
   console.log(window.localStorage.getItem("terca"))
   console.log(window.localStorage.getItem("quarta"))
   console.log(window.localStorage.getItem("quinta"))
   console.log(window.localStorage.getItem("sexta"))
   console.log(window.localStorage.getItem("sabado"))
   console.log(window.localStorage.getItem("domingo"))
   console.log(window.localStorage.getItem("horarioA"))
   console.log(window.localStorage.getItem("horarioF"))
}

const name = document.getElementById("nome")
const endereco = document.getElementById("endereco")
const segunda = document.getElementById("segunda")
const terca = document.getElementById("terca")
const quarta = document.getElementById("quarta")
const quinta = document.getElementById("quinta")
const sexta = document.getElementById("sexta")
const sabado = document.getElementById("sabado")
const domingo = document.getElementById("domingo")
const horarioA = document.getElementById("horarioA")
const horarioF = document.getElementById("horarioF")
const submit = document.getElementById("form")
const form = document.getElementById("form")

name.addEventListener("change", handleChangeName)
endereco.addEventListener("change", handleChangeEndereco)
segunda.addEventListener("change", handleChangeSegunda)
terca.addEventListener("change", handleChangeTerca)
quarta.addEventListener("change", handleChangeQuarta)
quinta.addEventListener("change", handleChangeQuinta)
sexta.addEventListener("change", handleChangeSexta)
sabado.addEventListener("change", handleChangeSabado)
domingo.addEventListener("change", handleChangeDomingo)
horarioA.addEventListener("change", handleChangeHorarioA)
horarioF.addEventListener("change", handleChangeHorarioF)
submit.addEventListener("submit" , handleSubmit)
form.addEventListener("submit" , logSubmit)


function logSubmit(event) {
    alert("preparando envio")
    event.preventDefault()
}




