document.querySelector('.btn').addEventListener('click', function(){
   var fetched= fetch('https://6469da9c03bb12ac2093f7d4.mockapi.io/upconstruction',{
        method:"POST",
        headers:{
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
            img: document.querySelector('#img').value,
            name: document.querySelector('#name').value,
            about: document.querySelector('#about').value
        })
    })
        fetched.then(res=>{
            (res.ok==true)
            {
                document.querySelector('#img').value='',
                document.querySelector('#name').value='',
                document.querySelector('#about').value=''
            }
        }).catch(err=>console.log(err))
})