const imgBaseUrl =
  "https://raw.githubusercontent.com/Coding-Club-NIT-Meghalaya/Cognitia-2022-DB/main/images/";

// Robotics Event Card Started

function myfun(data) {
  var row = document.querySelector("#roboticsEventCards");
  for (let i = 0; i < data.length; i++) {
    let roboticsClubEventCardLayout =
      '<div class="col-md-4 mt-4"><div class="blog-wrap pb-4"><a href="' +
      data[i].doc_link +
      `"><img src="${imgBaseUrl}`;
    roboticsClubEventCardLayout +=
      data[i].image + '" alt=""></a><h5 class="px-4 pt-3 text-center">';
    roboticsClubEventCardLayout +=
      data[i].name +
      '</h5><p class="px-4 mb-3 ">Total prize:<small class="prize_money"><i class="fa fa-rupee"></i> ';
    roboticsClubEventCardLayout +=
      data[i].total_prize + '</small></p><p class="px-4 text-justify">';
    roboticsClubEventCardLayout +=
      data[i].description.substring(0, 100) +
      '...</p><p class="px-4 py-2">Event Duration: <small class="px-2 pt-3 h6">';
    roboticsClubEventCardLayout += data[i].duration + '</small></p><a href="';
    roboticsClubEventCardLayout +=
      data[i].doc_link +
      '"><div class="go-post pl-4 pt-2"><i class="fa fa-long-arrow-right"></i></div></a></div></div>';
    row.innerHTML += roboticsClubEventCardLayout;
  }
}
fetch("https://cognitia2021.herokuapp.com/api/events/")
  .then((response) => response.json())
  .then((data) => myfun(data.filter((e) => e.type === "Robotics")));

// Coding Event Card Started

function myfun1(data) {
  var row1 = document.querySelector("#codingEventCards");
  for (let i = 0; i < data.length; i++) {
    let codingEventCardLayout =
      '<div class="col-md-4 mt-4"><div class="blog-wrap pb-4"><a href="' +
      data[i].doc_link +
      `"><img src="${imgBaseUrl}`;
    codingEventCardLayout +=
      data[i].image + '" alt=""></a><h5 class="px-4 pt-3 text-center">';
    codingEventCardLayout +=
      data[i].name +
      '</h5> <p class="px-4 mb-3 ">Total prize:<small class="prize_money"><i class="fa fa-rupee"></i>' +
      data[i].total_prize +
      "</small></p>";
    codingEventCardLayout +=
      '<p class="px-4 text-justify">' +
      data[i].description.substring(0, 100) +
      '...</p><p class="px-4 py-2">Event Duration: <small class="px-2 pt-3 h6">';
    codingEventCardLayout += data[i].duration + '</small></p><a href="';
    codingEventCardLayout +=
      data[i].doc_link +
      '"><div class="go-post pl-4 pt-2"><i class="fa fa-long-arrow-right"></i></div></a></div></div>';
    row1.innerHTML += codingEventCardLayout;
  }
}
fetch("https://cognitia2021.herokuapp.com/api/events/")
  .then((response) => response.json())
  .then((data) => myfun1(data.filter((e) => e.type === "Coding")));

// Departmental & Gaming Event card Started
function showDepartmental(data, cardId) {
  data = data.sort(function (a, b) {
    var x = a.type.toLowerCase();
    var y = b.type.toLowerCase();
    return x < y ? 1 : x > y ? -1 : 0;
  });
  var row2 = document.querySelector("#departmentalEventCards");
  for (let i = 0; i < data.length; i++) {
    let myhtml =
      '<div class="col-md-4 mt-4"><div class="blog-wrap pb-4"><a href="' +
      data[i].doc_link +
      `"><img src="${imgBaseUrl}`;
    myhtml += data[i].image + '" alt=""></a><h5 class="px-4 pt-3 text-center">';
    myhtml +=
      data[i].name +
      '</h5><p class="px-4 mb-3 ">Total prize:<small class="prize_money"><i class="fa fa-rupee"></i> ';
    myhtml += data[i].total_prize + '</small></p><p class="px-4 text-justify">';
    myhtml +=
      data[i].description.substring(0, 100) +
      '...</p><p class="px-4 py-2">Event Duration: <small class="px-2 pt-3 h6">';
    myhtml += data[i].duration + '</small></p><a href="';
    myhtml +=
      data[i].doc_link +
      '"><div class="go-post pl-4 pt-2"><i class="fa fa-long-arrow-right"></i></div></a></div></div>';
    row2.innerHTML += myhtml;
  }
}

fetch("https://cognitia2021.herokuapp.com/api/events/")
  .then((response) => response.json())
  .then((data) =>
    showDepartmental(
      data.filter((e) => e.type.substring(0, 12) === "Departmental"),
      "#departmentalEventCards"
    )
  );

fetch("https://cognitia2021.herokuapp.com/api/events/")
  .then((response) => response.json())
  .then((data) =>
    showDepartmental(
      data.filter((e) => e.type === "Gaming"),
      "#departmentalEventCards"
    )
  );
