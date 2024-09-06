import data  from "./Mock.js"


let example = 'saude'

const cardsContainer = document.querySelector("#cards-container")
const title = document.querySelector("#service-title")


let servicos  = data[example]
title.innerText = example

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

