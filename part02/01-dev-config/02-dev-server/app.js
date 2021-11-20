fetch('http://localhost:3000/api/hello')
  .then(response => response.text())
  .then(result => {
    console.log(result)
  })