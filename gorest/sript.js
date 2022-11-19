let listUser = document.getElementById("listUser")
let email = document.getElementById("email")
let name = document.getElementById("name")
let gander = document.getElementById("gender")
let status = document.getElementById("status")

getUser()



function getUser() {
    fetch("https://gorest.co.in/public/v2/users")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            data.forEach(showUser)
        })
        .catch(error => {
            console.log(error)
        });
}

function showUser(value, index) {
    listUser.innerHTML += `<tr>
    <td>${value.email}</td>
    <td>${value.name}</td>
    <td>${value.gender}</td>
    <td>${value.status}</td>
    <td><button class="btn btn-info" onclick="editUser(${value.id})">Edit</button>
    <button class="btn btn-danger" onclick="deleteUser(${value.id})">Delete</button></td>
    </tr>`
}

function deleteUser(id) {
    console.log("Hapus data id: " + id)
    fetch("https://gorest.co.in/public/v2/users/" + id, {
            method: "DELETE",
            headers: {
                Authorization:"Bearer 577ea04fcea30fa6723a7ff6d939d0387b77d3add92b12dfd8e441c3a1d3ea9f"
            }
        })
        .then(response => {
            console.log(response)
            listUser.innerHTML = "" // kosongkan tabel list user
            getUser() // panggil function getUser()
        })
        .catch(error => {
            console.log(error)
        })
}
function createUser () {
    fetch("https://gorest.co.in/public/v2/users/" + id, {
        method: "POST",
        headers: {
            'Content-Type' : 'application/json',
            'Authorization':"Bearer 577ea04fcea30fa6723a7ff6d939d0387b77d3add92b12dfd8e441c3a1d3ea9f"
        },
        body: JSON.stringify({
            "email" : email.value,
            "name" : name.value,
            "gender" : gender.value,
            "status" : status.value
        })
    })

.then (Response => {
    response.json()
    console.log(response.status)
})
.then(result => {
    console.log(result)
   if(response.status == 201) {
       alert.innerHTML = <div class= "alert-success">User Berhasil disimpan</div>
   }else{
       alert.innerHTML = <div class="alert alert-danger">user gagal disimpan</div>
   }
})

.then(result => {
    console.log(result)
})
}