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
  const teamData = await teamResponse.json();
  getTeam(teamData);
}

function getTeam(teamData) {
  const eventImg = document.querySelector("#eventTeam");
  const url = "https://cognitia2021.herokuapp.com/";
  let teamHtml = '<div class="row">';
  // Secratary
  // Core Team
  
  teamHtml += createEventTeamSection(
    "Publicity Team",
    teamData.filter((e) => e.type.substring(0, 9) == "Publicity")
  );
  teamHtml += createEventTeamSection(
    "TechStrom",
    teamData.filter((e) => e.event_name == 10)
  );
  teamHtml += createEventTeamSection(
    "CodeUtsav",
    teamData.filter((e) => e.event_name == 2)
  );
  teamHtml += createEventTeamSection(
    "HackOverFlow",
    teamData.filter((e) => e.event_name == 5)
  );
  teamHtml += createEventTeamSection(
    "Gaming",
    teamData.filter((e) => e.event_name == 16)
  );
  teamHtml += createEventTeamSection(
    "Design Cave",
    teamData.filter((e) => e.event_name == 7)
  );
  teamHtml += createEventTeamSection(
    "Prasan Baan",
    teamData.filter((e) => e.event_name == 6)
  );
  teamHtml += createEventTeamSection(
    "Cognithon",
    teamData.filter((e) => e.event_name == 12)
  );
  teamHtml += createEventTeamSection(
    "HackMafia",
    teamData.filter((e) => e.event_name == 1)
  );
  teamHtml += createEventTeamSection(
    "TinkerBlink",
    teamData.filter((e) => e.event_name == 8)
  );
  teamHtml += createEventTeamSection(
    "TreasureHunt",
    teamData.filter((e) => e.event_name == 11)
  );
  teamHtml += createEventTeamSection(
    "Designing Team",
    teamData.filter((e) => e.type.substring(0, 9) == "Designing")
  );
  teamHtml += createEventTeamSection(
    "Sponsorship & Marketing Team",
    teamData.filter((e) => e.type.substring(0, 7) == "Sponsor")
  );
  // teamHtml += createEventTeamSection(
  //   "Web Development Team",
  //   teamData.filter((e) => e.type.substring(0, 4) == "Web")
  // );
  teamHtml += createEventTeamSection(
    "CSE Departmental",
    teamData.filter((e) => e.event_name==29)
  );
  teamHtml += createEventTeamSection(
    "ECE Departmental",
    teamData.filter((e) => e.event_name==26)
  );
  teamHtml += createEventTeamSection(
    "EEE Departmental",
    teamData.filter((e) => e.event_name==25)
  );
  teamHtml += createEventTeamSection(
    "ME Departmental",
    teamData.filter((e) => e.event_name==27)
  );
  teamHtml += createEventTeamSection(
    "CE Departmental",
    teamData.filter((e) => e.event_name==3)
  );
  eventImg.innerHTML += teamHtml + "</div>";
}

showTeam();

const createEventTeamSection = (eventName, imagesOfCordinators) => {
  imagesOfCordinators = imagesOfCordinators.sort(function(a,b) {
    var x = a.type.toLowerCase();
    var y = b.type.toLowerCase();
    return x < y ? 1 : x > y ? -1 : 0;
});
  let EventTeamCardLayout = `<div class="col-lg-3 team_title"> <h6>${eventName}</h6> </div>
<div class="col-lg-9 mt-4 mt-lg-0">
    <div class="sponsors">`;
  for (i = 0; i < imagesOfCordinators.length; i++) {
    try {
      // let imageOfCo = imagesOfCordinators[i].image;
      EventTeamCardLayout += `<img src="https://cognitia2021.herokuapp.com/${imagesOfCordinators[i].image}" alt="">`;
    } catch {
      console.log(imagesOfCordinators[i].name, "image not found");
    }
  }
  EventTeamCardLayout += `</div></div>`;
  return EventTeamCardLayout;
};
