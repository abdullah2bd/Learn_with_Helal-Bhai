
const post = document.querySelector(".post-grid")
let posts = [
  {
    title: "Post 1",
    Author: " kamal",
    Description: "this is post description",
    like: 12,
  },

  {
    title: "Post 2",
    Author: " jamal",
    Description: "this is post description",
    like: 65,
  },
  {
    title: "Post 3",
    Author: " rahim",
    Description: "this is post description",
    like: 56,
  },

  {
    title: "Post 4",
    Author: " karim",
    Description: "this is post description",
    like: 92,
  },
  {
    title: "Post 5",
    Author: " rahim",
    Description: "this is post description",
    like: 56,
  },

  {
    title: "Post 6",
    Author: " karim",
    Description: "this is post description",
    like: 92,
  },
];

// posts.forEach(function(){
//   let html = `  <div class="post-item">
//         <h2>one</h2>
//         <h4>name</h4>
//         <p>post</p>
//         <p>like</p>
//       </div>`;
//    post.innerHTML = html  
// })


posts.forEach(function(i){
  let html = `  <div class="post-item">
        <h2>${i.title}</h2>
        <h4>${i.Author}</h4>
        <p>${i.Description}</p>
        <p>${i.like}</p>
      </div>`;
   post.innerHTML += html;
})
