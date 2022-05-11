let soff = []
$(".button").on("click" , () =>{
    $.ajax("https://myjson.dit.upm.es/api/bins/fsxf" ,{
        success:function(response){
            news(response)
            soff = response
        },
        error:function(error){
            console.log(error);
        }
    })
})

function news(obyekt){
        $("tbody").html("")
    obyekt.forEach(element => {
        let tr= `
        <tr>
          <td>${element.title}</td>
          <td>${element.date}</td>
          <td>${element.categories}</td>
          <td> <a href=" ${element.url}">malumot</a></td>
        </tr>
        `
        $("tbody").append(tr)

    });
}

$('.search').on('input',()=>{
      let search=soff.filter(united=>{

          return united.title.toLowerCase().includes($('.search').val())
      })

      news(search)
     
       })


       $(".kategoriya").on("change" , ()=>{
           let filtirlash = soff.filter( item =>{
               return item.categories.toLowerCase() == $(".kategoriya").val()
           })
           news(filtirlash)
           console.log($(".kategoriya").val())
       })

