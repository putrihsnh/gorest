let listUser = document.getElementById("listUser")

fetch("https://gorest.co.in/public/v2/users")
.then(Response => Response.json())
.then(data => {
    console.log(data)
})
    .catch(error => {
        console.log(error)

    });

    function showUser(value,index){
        listUser.innerHTML += `<tr>
        <td>${value.email}</td>
        <td>${value.name}</td>
        <td>${value.gender}</td>
        <td>${value,status}</td>
        <td><button class = "btn-info" onClick=" editUser(${value.id})">Edit</button><button 
        class= "btn btn-danger" onClick= "deleteUser(${value,id})"
        >Delete</button></td></tr>`
    }
    function deleteUser(id) {
        console.log("hapus data id: "  + id)
        fetch ("https://gorest.co.in/public/v2/users/" + id, {
            method : "DELETE",
            headers: { 
                Authorization:"Bearer 577ea04fcea30fa6723a7ff6d939d0387b77d3add92b12dfd8e441c3a1d3ea9f"
            }
            })
        .then(Response => {
            console.log(Response)
            listUser.innerHTML = ""
            getUser()
        })
        .catch(error =>{
            console.log(error)
        })
    }

