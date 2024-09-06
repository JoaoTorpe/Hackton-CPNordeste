
const cards = document.querySelectorAll(".service-category-card")


cards.forEach(e =>{
    e.addEventListener('click',()=>{
        console.log(e.getAttribute("data-key"))
    })

} )