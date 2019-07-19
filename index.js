//  makes a POST request to /user with a name and email
//  handles the POST request response, retrieves the new id value
//  and appends it to the DOM
//  handles a failed POST request using catch, appends the error m
// essage to the DOM



function submitData(name, email){
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name,
      email
    })
  })
  .then(function(response){
    return response.json();
  })
  .then(function(object){
    document.body.innerHTML = object['id']
  })
  .catch(function(error){
    document.body.innerHTML=error.message
  })
}
