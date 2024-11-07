const urlApi = "https://jsonplaceholder.typicode.com/posts";

fetch(urlApi)
  .then(function (get) {
    return get.json();
  })
  .then(function (response) {
    response.forEach(function (item) {
      console.log(item.userId);
      console.log(item.id);
      console.log(item.title);
      console.log(item.body);



      document.write(item.userId);
      document.write(item.id);
      document.write(item.title);
      document.write(item.body);
      
    });
  });
