let lorem = [
    {

        "title": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum illo fugiat, odit molestias, corrupti accusantium esse possimus ab cupiditate impedit placeat cum sed quos numquam a, sunt dicta consequatur eos.",
        "photo" : "https://st2.depositphotos.com/1000393/6507/i/600/depositphotos_65076917-stock-photo-hacker-and-terrorism-fight.jpg"
    },
    {
        "title": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum illo fugiat, odit molestias, corrupti accusantium esse possimus ab cupiditate impedit placeat cum sed quos numquam a, sunt dicta consequatur eos.",
        "photo" : "https://st2.depositphotos.com/1000393/6507/i/600/depositphotos_65076917-stock-photo-hacker-and-terrorism-fight.jpg"
    },
    {
        "title": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum illo fugiat, odit molestias, corrupti accusantium esse possimus ab cupiditate impedit placeat cum sed quos numquam a, sunt dicta consequatur eos.",
        "photo" : "https://st2.depositphotos.com/1000393/6507/i/600/depositphotos_65076917-stock-photo-hacker-and-terrorism-fight.jpg"
    }, 
    {
        "title": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum illo fugiat, odit molestias, corrupti accusantium esse possimus ab cupiditate impedit placeat cum sed quos numquam a, sunt dicta consequatur eos.",
        "photo" : "https://st2.depositphotos.com/1000393/6507/i/600/depositphotos_65076917-stock-photo-hacker-and-terrorism-fight.jpg"
    }, 
    {
        "title": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum illo fugiat, odit molestias, corrupti accusantium esse possimus ab cupiditate impedit placeat cum sed quos numquam a, sunt dicta consequatur eos.",
        "photo" : "https://st2.depositphotos.com/1000393/6507/i/600/depositphotos_65076917-stock-photo-hacker-and-terrorism-fight.jpg"
    }, 
    {
        "title": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum illo fugiat, odit molestias, corrupti accusantium esse possimus ab cupiditate impedit placeat cum sed quos numquam a, sunt dicta consequatur eos.",
        "photo" : "https://st2.depositphotos.com/1000393/6507/i/600/depositphotos_65076917-stock-photo-hacker-and-terrorism-fight.jpg"
    }, 
    {
        "title": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum illo fugiat, odit molestias, corrupti accusantium esse possimus ab cupiditate impedit placeat cum sed quos numquam a, sunt dicta consequatur eos.",
        "photo" : "https://st2.depositphotos.com/1000393/6507/i/600/depositphotos_65076917-stock-photo-hacker-and-terrorism-fight.jpg"
    }, 
    {
        "title": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum illo fugiat, odit molestias, corrupti accusantium esse possimus ab cupiditate impedit placeat cum sed quos numquam a, sunt dicta consequatur eos.",
        "photo" : "https://st2.depositphotos.com/1000393/6507/i/600/depositphotos_65076917-stock-photo-hacker-and-terrorism-fight.jpg"
    }, 
    {
        "title": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum illo fugiat, odit molestias, corrupti accusantium esse possimus ab cupiditate impedit placeat cum sed quos numquam a, sunt dicta consequatur eos.",
        "photo" : "https://st2.depositphotos.com/1000393/6507/i/600/depositphotos_65076917-stock-photo-hacker-and-terrorism-fight.jpg"
    }, 
    
]



let container =document.createElement("div")
container.classList.add("container")

let row = document.createElement("div")
row.classList.add("row")

let sarlavha = document.createElement("div")

lorem.forEach(yangilik =>{
   
    
    let col = document.createElement("div")
    col.classList.add("col-4")

    let p = document.createElement("p")
    p.innerText = yangilik.title

    let img = document.createElement("img")
    img.src=yangilik.photo
    img.alt="bla bla bla"
    // img.classList.add("raunded-circle")

    let card = document.createElement("div")
    card.classList.add("card" , "my-4")

    card.appendChild(img)
    card.appendChild(p)
    col.appendChild(card)
    row.appendChild(col)

})
let body = document.querySelector("body")


container.appendChild(row)
body.appendChild(container)




function blok(){
    let photo = prompt(src = "123")
    let title = prompt("yangilikni kiriting")   
}


 lorem.push({
     photo: photo,
     title: title
 })

console.log(lorem.photo);
console.log(lorem.title)




