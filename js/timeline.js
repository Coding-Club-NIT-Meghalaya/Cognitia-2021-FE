// Fetch and update schedule data
function timelineFun(data, membersData) {
  let eventDay2 = document.querySelector("#event-Day2");

  for (let i = 0; i < data.length; i++) {
    let member = membersData.filter(
      (memberObj) => memberObj.event_name === data[i].id
    );
    let coOrdinator = [
      ...member
        .filter((obj) => obj.type == "Coordinator")
        .map((obj) => obj.member_name),
    ];
    let coCoOrdinator = [
      ...member
        .filter((obj) => obj.type == "Co-Coordinator")
        .map((obj) => obj.member_name),
    ];

    let eventDate = data[i].year.start_date;

    let time = (date) => {
      if (+date.slice(0, 2) > 12)
        return `${date.slice(0, 2) - 12}${date.slice(2, date.length)} pm`;
      return `${date} am`;
    };

    let start_time = time(eventDate.slice(11, 16));
    let end_time = time(data[i].end_date.slice(11, 16));

    const eventScheduleHTML = `
      <div class="col-md-3" id="event-schedule">
        <div class="schedule-time mb-4">
          <p>${start_time} - ${end_time}</p>
        </div>
        <div class="schedule-place">
          <p><a href="${data[i].meet_link}" target="_blank">Meet Joining Link</a></p>
        </div>
      </div>
    `;
    const eventDetailsHTML = `
      <div class="col-md-9 mt-4 mt-md-0" id="event-details">
        <h5>${data[i].name}</h5>
        <p><em>Hosted by ${data[i].type} Club</em></p>
        <div class="section pl-5">
          <h6 class="mt-5 mb-3">${data[i].description}</h6>
          <p><strong>Cordinators</strong> - ${coOrdinator}</p>
          <p><strong>Co-Cordinators</strong> - ${coCoOrdinator}</p>
          <a href="${data[i].doc_link}" class="btn-pass-4"><button class="View_details_button">
            Get More Info
          </button> </a>
        </div>
      </div>
    `;

    if (eventDate.slice(0, 10) == "2021-10-03") {
      eventDay2.insertAdjacentHTML("beforebegin", eventScheduleHTML);
      eventDay2.insertAdjacentHTML("beforebegin", eventDetailsHTML);
    }
    if (eventDate.slice(0, 10) == "2021-10-04") {
      eventDay2.insertAdjacentHTML("afterend", eventDetailsHTML);
      eventDay2.insertAdjacentHTML("afterend", eventScheduleHTML);
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
