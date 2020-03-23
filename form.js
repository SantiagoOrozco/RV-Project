let room = [];

document.getElementById("btn2").addEventListener("click", function(){
    let name = document.getElementById("name").value
    let last_name = document.getElementById("last_name").value
    let phone = document.getElementById("phone").value
    let email = document.getElementById("email").value
    let famsize = document.getElementById("famsize").value

    let fam = {
        name: name,
        last_name: last_name,
        phone: phone,
        email: email,
        famsize: famsize
    }

    room.push(fam)

    updateRoom();
});

function updateRoom(){

    if (typeof(room[1]) === "object"){
        return;
    }

    document.getElementById("box").innerHTML = ("")
    let compList;
    let list = document.createElement("ol")
    for(let x=0; x<room.length; x++){
        let keys = Object.keys(room[x])
        for(let i=0; i<keys.length; i++){
            let litag = document.createElement("li")
            let value = (room[x][keys[i]])
            litag.innerHTML = (value)
            list.appendChild(litag)
            compList = list
        }
        document.getElementById("box").appendChild(compList)
        console.log(room)
    }
}
