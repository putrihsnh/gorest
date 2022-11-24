listUser = document.getElementById("listUser")
let email = document.getElementById("email")
let name = document.getElementById("name")
let gender = document.getElementById("gender")
let status = document.getElementById("status")
let alert = document.getElementById("alert")
let btnCreate = document.getElementById("btnCreate")
getUser()

function getUser() {
    fetch("https://gorest.co.in/public/v2/users", {
            headers: {
                Authorization: "Bearer 577ea04fcea30fa6723a7ff6d939d0387b77d3add92b12dfd8e441c3a1d3ea9f"
            }
        })
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
                Authorization: "Bearer 577ea04fcea30fa6723a7ff6d939d0387b77d3add92b12dfd8e441c3a1d3ea9f"
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

function createUser(statusSimpan = 0, id = 0) {
    if (statusSimpan == 0) {
        //simpan data
        console.log("Button simpan ditekan")
        fetch("https://gorest.co.in/public/v2/users", {
                method: "POST",
                headers: {
                    Authorization: "Bearer 577ea04fcea30fa6723a7ff6d939d0387b77d3add92b12dfd8e441c3a1d3ea9f"
                },
                body: JSON.stringify({
                    "email": email.value,
                    "name": name.value,
                    "gender": gender.value,
                    "status": status.value
                })
            })

            .then(response => {
                response.json()
                console.log(response.status)
            })
            .then(result)
        if (response.status == 201) { //user berhasil disimpan siserver Gorest
            alert.innerHTML = '<div class = "alert alert-success" > User berhasil disimpan < /div>'
        } else( // user gagal disimpan keserver gorest
                alert.innerHTML = '<div class = "alert alert-danger" > User gagal disimpan < /div>'
            )

            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            });
    } else {
        //  ubah data
        console.log("Button ubah ditekan")
        fetch("https://gorest.co.in/public/v2/users/" + id, {
                method: "PUT",
                headers: {
                    Authorization:"Bearer 577ea04fcea30fa6723a7ff6d939d0387b77d3add92b12dfd8e441c3a1d3ea9f"
                },
                body: JSON.stringify({
                    "email": email.value,
                    "name": name.value,
                    "gender": gender.value,
                    "status": status.value
                })
            })
            .then(response => {
                response.json()
                console.log(response.status)
            })
            .then(result)
        if (response.status == 200) { //user berhasil disimpan siserver Gorest
            alert.innerHTML = '<div class = "alert alert-success" > User berhasil disimpan < /div>'
        } else( // user gagal disimpan keserver gorest
                alert.innerHTML = '<div class = "alert alert-danger" > User gagal disimpan < /div>'
            )

            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            });
    }

}

function editUser(id) {
    console.log(id)
    fetch("https://gorest.co.in/public/v2/users/" + id, {
            headers: {
                Authorization: "Bearer 577ea04fcea30fa6723a7ff6d939d0387b77d3add92b12dfd8e441c3a1d3ea9f"
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            // set value input email, name, gender, dan status
            email.value = data.email
            name.value = data.name
            gender.value = data.gender
            status.value = data.status
            // ubah teks "simpan" menjadi "ubah"
            btnCreate.innerHTML = "Ubah"
            // ubah onclick dengan menambahkan parameter "11"
            // onclick="createUser(1)" 
            btnCreate.setAttribute("onclick", "createUser(1" + id + ")")
        })
        .catch(error => {
            console.log(error)
        });
}