var area=document.querySelector('.area')
fetch('https://6469da9c03bb12ac2093f7d4.mockapi.io/upconstruction')
.then(res=>res.json())
.then(res=>{
    res.forEach(el => {
        area.innerHTML+=`
        <div class="col-6">
                <div class="card mb-3">
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img src="${el.img}" class="img-fluid rounded-start" width="100%">
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title"><b>${el.name}</b></h5>
                          <p class="card-text">${el.about}</p>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>`
    });
})

var input=document.querySelector('.inp-search')
document.querySelector('.bttn-search').addEventListener("click", function(){
  fetch('https://6469da9c03bb12ac2093f7d4.mockapi.io/upconstruction')
  .then(res=>res.json())
  .then(res=>{
    var newArr=[]
    res.forEach(el=>{
      if(el.name.toLowerCase().includes(input.value.toLowerCase())){
        newArr.push(el)
      }
    })
    area.innerHTML=""
    newArr.forEach(el=>{
      console.log(el.name)
      area.innerHTML+=`
        <div class="col-6">
                <div class="card mb-3">
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img src="${el.img}" class="img-fluid rounded-start" width="100%">
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title"><b>${el.name}</b></h5>
                          <p class="card-text">${el.about}</p>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>`
    })
  })
})