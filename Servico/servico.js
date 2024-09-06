import data  from "./Mock.js"

const logo = document.querySelector("#logo")

logo.addEventListener('click',moveToIndex)

let item = localStorage.getItem("servico-key")

const cardsContainer = document.querySelector("#cards-container")
const title = document.querySelector("#service-title")


let servicos  = data[item]
title.innerText = localStorage.getItem("service-name")

servicos.forEach(e => {
   

let element =  `  

    <div class="card">
        <h1 class="card-name" >${e.nome}</h1>

      <a href="${e.link}" target="_blank">Acessar</a>
    </div>
   `

let tempDiv = document.createElement('div')
tempDiv.innerHTML =element

cardsContainer.appendChild(tempDiv.childNodes[1])


    
});


function moveToIndex(){
  console.log("rodou")
  window.location.href = '../Principal/index.html';
}
