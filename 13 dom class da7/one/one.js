let Teacher = document.querySelector(".Teacher");

let Teachers = [
  {
    No: 1,
    Name: "Mossarrof sir",
    Description: "He is a mathmatics teacher.",
  },

  {
    No: 2,
    Name: "Mosa Hojor",
    Description: "He is a Mufti.",
  },
  {
    No: 3,
    Name: "Johir sir",
    Description: "He is a mathmatics teacher and english.",
  },
  {
    No: 4,
    Name: "Saiful sir",
    Description: "He is a english teacher.",
  },
];

Teachers.forEach(function (a) {
  let html = `<div class="teachers">
    <h4>${a.No}</h4>
    <h3>${a.Name}</h3>
    <h5>${a.Description}</h5>
  </div>`;

  Teacher.innerHTML += html;
});
