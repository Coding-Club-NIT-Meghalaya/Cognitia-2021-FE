// Fetch and update schedule data
function timelineFun(data, membersData) {
  let eventDay1 = document.querySelector("#event-Day1");
  let eventDay2 = document.querySelector("#event-Day2");
  let eventDay3 = document.querySelector("#event-Day3");

  const eventDays = [eventDay1, eventDay2, eventDay3];

  for (let i = data.length - 1; i >= 0; i--) {
    let member = membersData.filter(
      (memberObj) => memberObj.event_name === data[i].id
    );

    let eventStartDate = data[i].start_date;
    let eventEndDate = data[i].end_date;

    let time = (date) => {
      if (+date.slice(0, 2) > 12)
        return `${date.slice(0, 2) - 12}${date.slice(2, date.length)} pm`;
      return `${date} am`;
    };

    let start_time = time(eventStartDate.slice(11, 16));
    let end_time = time(eventEndDate.slice(11, 16));

    const eventScheduleHTML = `
    <div class="col-md-3" id="event-schedule">
        <div class="schedule-time mb-4">
        <p>${start_time} - ${end_time}</p>
        </div>
        <div class="schedule-place">
        <p><a href="${data[i].registration_link}" target="_blank">Register Here!</a></p>
        </div>
        </div>
        `;
    const eventDetailsHTML = `
      <div class="col-md-9 mt-4 mt-md-0" id="event-details">
        <h5>${data[i].name}</h5>
        <p><em>Hosted by ${data[i].type} ${
      data[i].type === "Coding" || data[i].type === "Robotics" ? "Club" : "Team"
    }</em></p>
        <div class="section pl-5">
        <h6 class="mt-5 mb-3">${data[i].description}</h6>
          <a href="${
            data[i].doc_link
          }" class="btn-pass-4"><button class="View_details_button">
            Get More Info
          </button> </a>
        </div>
        </div>
    `;

    function insertFunction(event) {
      event.insertAdjacentHTML("afterend", eventDetailsHTML);
      event.insertAdjacentHTML("afterend", eventScheduleHTML);
    }

    for (let i = 0; i < eventDays.length; i++) {
      if (+eventStartDate.slice(9, 10) == i + 5) insertFunction(eventDays[i]);
    }
  }
}

// DUAL API CALL
fetch("https://cognitia2021.herokuapp.com/api/events/")
  .then((response) => response.json())
  .then((data) => {
    fetch("https://cognitia2021.herokuapp.com/api/teammembers/")
      .then((response) => response.json())
      .then((membersData) => timelineFun(data, membersData));
  });
