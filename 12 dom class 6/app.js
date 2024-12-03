let postGrid = document.querySelector(".post-grid");
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
];

posts.forEach(function (post) {
  let html = `<div class="poest-item">
  <h1>${post.title}</h1>
  <h4>${post.Author}</h4>
  <p>${post.Description}</p>
  <p>${post.like}</p>
</div>`;
  postGrid.innerHTML += html;
});
