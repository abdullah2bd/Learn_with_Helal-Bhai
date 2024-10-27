/*


let post = document.querySelector(".post");


let students = [
  {
    Name: "Moaz",
    Roll: 1,
    Class: "Six",
    Place: "companigonj",
    Description: "It is description "
  },
  {
    Name: "Sakib",
    Roll: 11,
    Class: "Seven",
    Place: "companigonj",
    Description: "It is description "
  },
  {
    Name: "Ali",
    Roll: 19,
    Class: "Inter",
    Place: "companigonj",
    Description: "It is description "
  },
  {
    Name: "Jamed",
    Roll: 6,
    Class: "Nine",
    Place: "companigonj",
    Description: "It is description "
  },
  {
    Name: "Rafin",
    Roll: 2,
    Class: "Ten",
    Place: "companigonj",
    Description: "It is description "
  },
  {
    Name: "Joynob",
    Roll: 14,
    Class: "Inter",
    Place: "companigonj",
    Description: "It is description "
  },
]




students.forEach(function(postObject) {
  let pos = `<div class="post">
      <h1> ${postObject.Name} </h1>
      <h4>  ${postObject.Roll}</h4>
      <p> ${postObject.Class} </p>
      <p> ${postObject.Place} </p>
      <p> ${postObject.Description} </p>
    </div>
`;
post.innerHTML += pos

});

*/
/*
let postGrid = document.querySelector('.post-grid');

let posts = [
    {
        title: 'Post 1',
        author: 'Jubayer Ahmad',
        description: 'Hi Im Jubayer I push some post desc by js arrys',
        like: 122
    },
    {
        title: 'Post 2',
        author: 'Tafhim Hasan',
        description: 'Hi Im Tafhim I push some post desc by js arrys',
        like: 177
    },
    {
        title: 'Post 3',
        author: 'Habib ',
        description: 'Hi Im Habib I push some post desc by js arrys',
        like: 115
    }
];

posts.forEach(function(post){
    let html = `
        <div class="post-item">
            <h1>${post.title}</h1>
            <h2>${post.author}</h2>
            <p>${post.description}</p>
            <p>Like : ${post.like}</p>
        </div>
       `;
    postGrid.innerHTML += html;

})

*/
/*

// Dom Manupulate
let studentList = document.querySelector('.students-list');
let students = [
    {
    roll: 1,
    name: 'jubayer',
    age: 24,
    },
    {
    roll: 2,
    name: 'Habib',
    age: 27,
    },
    {
    roll: 3,
    name: 'Helal',
    age: 25,
    },
    {
    roll: 4,
    name: 'Abdullah',
    age: 19
    },
    {
    roll: 5,
    name: 'Nasir Jamshed',
    age: 26,
    },
    {
    roll: 6,
    name: 'Siam',
    age: 25,
    }
];
// Loop For Students informarion
students.forEach(function(student){
    renderHtml(student)  
});
// Render html 
function renderHtml(studentObject){
    let html = ` <div class="students">
            <h3>Roll Number : ${studentObject.roll}</h3>
            <h3>Name : ${studentObject.name}</h3>
            <h3>Age : ${studentObject.age}</h3>
        </div>`;
    studentList.innerHTML += html;
}

*/




let Teacher = document.querySelector(".Teacher");


let Teachers = [
  {
    No:1,
    Name: 'Mossarrof sir',
    Description: 'He is a mathmatics teacher.'
  },

  {
    No: 2,
    Name: 'Mosa Hojor',
    Description: 'He is a Mufti.'
  },
  {
    No: 3,
    Name: 'Johir sir',
    Description: 'He is a mathmatics teacher and english.'
  },
 {
    No: 4,
    Name: 'Saiful sir',
    Description: 'He is a english teacher.'
  },
];
/*
Teachers.forEach(function(loop){
  let teach = `   <div class="teachers">
    <h4 class="No:">${loop.No}</h4>
    <h3 class="Name">${loop.Name}</h3>
    <h5 class="Description+">${loop.Description}</h5>
  </div>`;
  Teacher.innerHTML += teach;
});
*/


Teachers.forEach( function(back) {
  loops(back);
})
function loops(loop) {
  let teach =  `   <div class="teachers">
  <h4 class="No:">${loop.No}</h4>
  <h3 class="Name">${loop.Name}</h3>
  <h5 class="Description+">${loop.Description}</h5>
</div>`;
 Teacher.innerHTML += teach;
}













/*

let Teacher = document.querySelector(".Teacher");

let Teachers = [
  {
    No: 1,
    Name: 'Mossarrof sir',
    Description: 'He is a mathematics teacher.'
  },
  {
    No: 2,
    Name: 'Mosa Hojor',
    Description: 'He is a Mufti.'
  },
  {
    No: 3,
    Name: 'Johir sir',
    Desscription: 'He is a mathmmatics teacher and Eglish.'
  },
  {
    No: 4,
    Name: 'Saiful sir',
    Description: 'He is an English teacher.'
  },
];

// Function to create teacher elements
function createTeacherElement(teacher) {
  let teach = `
    <div class="teachers" onclick="showTeacherInfo('${teacher.Name}')">
      <h4 class="No">${teacher.No}</h4>
      <h3 class="Name">${teacher.Name}</h3>
      <h5 class="Description">${teacher.Description}</h5>
    </div>`;
  Teacher.innerHTML += teach;
}

// Function to show teacher info
function showTeacherInfo(name) {
  alert(`You clicked on: ${name}`);
}

// Loop through the Teachers array and create DOM elements
Teachers.forEach(function(teacher) {
  createTeacherElement(teacher);
});

// Optional: Add a button to clear the list
let clearButton = document.createElement('button');
clearButton.innerText = 'Clear Teachers';
clearButton.onclick = function() {
  Teacher.innerHTML = '';
};
document.body.appendChild(clearButton);




*/





