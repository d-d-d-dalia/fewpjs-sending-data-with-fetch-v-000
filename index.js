function submitData() {
  fetch('http://localhost:300/dogs', {
    method: 'POST',
    headers: {
      'Content-Type':
        'application/json',
      'Accept':
        'application/json'
    }
    body: JSON.stringify(formData)
  })
}
