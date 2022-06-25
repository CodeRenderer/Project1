function loadHTML(fileName){
    fetch(fileName)
    .then(response=> response.text())
    .then(text=> document.getElementById('homePage').innerHTML = '<pre>' + text  + '</pre>'  );
  }