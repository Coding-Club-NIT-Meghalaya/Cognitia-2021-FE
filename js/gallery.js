async function showImg() {
  const response = await fetch(
    "https://cognitia2021.herokuapp.com/api/gallery/"
  );
  const data = await response.json();
  getImg(data);
}

function getImg(data) {
  var row = document.querySelector("#galleryimages");
  for (let i = 0; i < data.length; i++) {
    let myhtml =
      '<div  class="col-sm-6 col-md-4" style="padding: 15px;"><a href="https://cognitia2021.herokuapp.com/' +
      data[i].image;
    myhtml += '"data-fancybox="gallery">';
    myhtml +=
      '<div class="img-wrap gallery"><img src="https://cognitia2021.herokuapp.com/' +
      data[i].image;
    myhtml += '" alt=""></div></a></div>';
    row.innerHTML += myhtml;
  }
}

showImg();

async function showTeam() {
  const teamResponse = await fetch(
    "https://cognitia2021.herokuapp.com/api/teammembers/"
  );
  const eventResponse = await fetch(
    "https://cognitia2021.herokuapp.com/api/events/"
  );
  const teamData = await teamResponse.json();
  const eventData = await eventResponse.json();
  getTeam(teamData, eventData);
}

function getTeam(teamData, EventData) {
  const eventImg = document.querySelector("#eventTeam");
  const url = "https://cognitia2021.herokuapp.com/";
  let teamHtml = '<div class="row">';
  for (let i = 1; i < 30; i++) {
    try {
      teamHtml += createEventTeamSection(
        EventData.filter((e) => e.id == i)[0].name,
        teamData.filter((e) => e.event_name == i)
      );
    } catch {
      console.log(i, "event not found");
    }
  }
  eventImg.innerHTML += teamHtml + "</div>";
}

showTeam();

const createEventTeamSection = (eventName, imagesOfCordinators) => {
  let EventTeamCardLayout = `<div class="col-lg-3"> <h6>${eventName}</h6> </div>
<div class="col-lg-9 mt-4 mt-lg-0">
    <div class="sponsors">`;
  for (i = 0; i < imagesOfCordinators.length; i++) {
    EventTeamCardLayout += `<img src="https://cognitia2021.herokuapp.com/${imagesOfCordinators[i].image}" alt="">`;
  }
  EventTeamCardLayout += `</div></div>`;
  return EventTeamCardLayout;
};
