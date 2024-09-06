
const cards = document.querySelectorAll(".service-category-card")


cards.forEach(e =>{
    e.addEventListener('click',(event)=>{
       let servicoKey = localStorage.getItem("servico-key")
        
       if(servicoKey != null){
        localStorage.removeItem("servico-key")
        localStorage.removeItem("service-name")
        localStorage.setItem("servico-key",event.target.getAttribute("data-key"))
        localStorage.setItem("service-name",event.target.innerText)
       }
       else{
        localStorage.setItem("service-name",event.target.innerText)
        localStorage.setItem("servico-key",event.target.getAttribute("data-key"))

       }
       window.location.href = '../Servico/servico.html';


    })

} )