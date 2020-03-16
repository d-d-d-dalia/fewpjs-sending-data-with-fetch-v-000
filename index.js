let data = { name: "Dalia", lifeStyle: "Amazing" }

function submitData() {
  fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type':
        'application/json',
      'Accept':
        'application/json'
    },
    body: 
    JSON.stringify(data)
  })
  .then(function(response) {
    return response.json()
  })
  .then(function(object) {
    console.log(object)
  })
}

submitData()
