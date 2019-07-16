

   
  function submitData(name, email) {
      let formData = {
        name,
        email
      }

    let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      };

    return fetch("http://localhost:3000/users", configObj)
      .then(resp => resp.json())
      .then(json => {  
          document.body.innerHTML = `name: ${json.name}, email: ${json.email}, id: ${json.id}`
      })
      .catch(error => {
        document.body.innerHTML = error.message
      })
  }
  
