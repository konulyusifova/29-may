var tbody=document.querySelector('tbody')
fetch('https://6469da9c03bb12ac2093f7d4.mockapi.io/upconstruction')
.then(res=>res.json())
.then(res=>{
    res.forEach(el => {
        tbody.innerHTML+=` <tr>
        <th scope="row">${el.id}</th>
        <td> <img src="${el.img}" alt="" height="80px"></td>
        <td>${el.name}</td>
        <td>${el.about}</td>
      </tr>`
    });
})