function submitData(name, email) {
    const formData = {
        name: name,
        email: email
    };
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    return fetch("http://localhost:3000/users", configObj)
    .then(response => response.json())
    .then(object => appendIdToDom(object))
    .catch(function(error) {
        const body = document.querySelector("body");
        body.innerHTML += error.message;
      });
    
}

function appendIdToDom(object) {
    let objectId = object["id"];
    const body = document.querySelector("body");
    let newP = document.createElement("p");
    newP.innerHTML = objectId;
    body.appendChild(newP);
 
}


   