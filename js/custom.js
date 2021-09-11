(function ($) {
  "use strict";

  //Preloader

  $(window).on("load", function (e) {
    // makes sure the whole site is loaded
    $(".loader__figure").fadeOut(); // will first fade out the loading animation
    $(".loader").delay(500).fadeOut("slow"); // will fade out the white DIV that covers the website.
  });

  /*! Popover */

  $("a.ticket-link").webuiPopover({
    url: "#ticket-wrap",
    width: 300,
    animation: "pop",
    arrow: true,
  });

  $(document).ready(function () {
    /*! Nicescroll */

    $("#boxscroll-1").niceScroll("#boxscroll-in-1", {
      cursorcolor: "#000",
      cursoropacitymax: 0.5,
      cursorwidth: "6px",
      cursorborder: "0px solid #fff",
      dblclickzoom: false,
      scrollspeed: 60,
      mousescrollstep: 60,
      autohidemode: false,
      bouncescroll: false,
      railpadding: { top: 20, right: 5, left: 0, bottom: 20 },
    });
    $("#boxscroll-2").niceScroll("#boxscroll-in-2", {
      cursorcolor: "#000",
      cursoropacitymax: 0.5,
      cursorwidth: "6px",
      cursorborder: "0px solid #fff",
      dblclickzoom: false,
      scrollspeed: 60,
      mousescrollstep: 60,
      autohidemode: false,
      bouncescroll: false,
      railpadding: { top: 20, right: 5, left: 0, bottom: 20 },
    });
    $("#boxscroll-3").niceScroll("#boxscroll-in-3", {
      cursorcolor: "#000",
      cursoropacitymax: 0.5,
      cursorwidth: "6px",
      cursorborder: "0px solid #fff",
      dblclickzoom: false,
      scrollspeed: 60,
      mousescrollstep: 60,
      autohidemode: false,
      bouncescroll: false,
      railpadding: { top: 20, right: 5, left: 0, bottom: 20 },
    });
    $("#boxscroll-4").niceScroll("#boxscroll-in-4", {
      cursorcolor: "#000",
      cursoropacitymax: 0.5,
      cursorwidth: "6px",
      cursorborder: "0px solid #fff",
      dblclickzoom: false,
      scrollspeed: 60,
      mousescrollstep: 60,
      autohidemode: false,
      bouncescroll: false,
      railpadding: { top: 20, right: 5, left: 0, bottom: 20 },
    });
    $("#boxscroll-5").niceScroll("#boxscroll-in-5", {
      cursorcolor: "#000",
      cursoropacitymax: 0.5,
      cursorwidth: "6px",
      cursorborder: "0px solid #fff",
      dblclickzoom: false,
      scrollspeed: 60,
      mousescrollstep: 60,
      autohidemode: false,
      bouncescroll: false,
      railpadding: { top: 20, right: 5, left: 0, bottom: 20 },
    });

    //Countdown

    $(".countdown").downCount(
      {
        date: "07/27/2019 12:00:00",
      },
      function () {
        // alert('WOOT WOOT, done!');
      }
    );

    //Animated Icons

    var options = {
      duration: 150,
      type: "oneByOne",
      animTimingFunction: Vivus.EASE,
    };

    var vivus = new Vivus("svg-ticket", options, onComplete);

    function onComplete() {}
  });
})(jQuery);

// Fetch and update schedule data
function myfun(data) {
  let eventContainer = document.querySelector("#event-container");
  let eventDay1 = $("#event-Day1");
  let eventDay2 = $("#event-Day2");

  for (let i = 0; i < data.length; i++) {
    // let member = membersData.filter((memberObj) => memberObj.id === data[i].id);
    // let coOrdinator = [...member.filter((obj) => obj.type == "Coordinator").map((obj) => obj.member_name)];
    // let coCoOrdinator = [...member.filter((obj) => obj.type == "Cocordinator").map((obj) => obj.member_name)];

    let time = (date) => {
      if (+date.slice(0, 2) > 12)
        return `${date.slice(0, 2) - 12}${date.slice(2, date.length)} pm`;
      return `${date} am`;
    };

    let start_time = time(data[i].start_date.slice(11, 16));
    let end_time = time(data[i].end_date.slice(11, 16));
    let coOrdinator = ["Govind"];

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
        <p><em>Hosted by Coding Club</em></p>
        <div class="section pl-5">
          <h6 class="mt-5 mb-3">${data[i].description}</h6>
          <p><strong>Cordinators</strong> - ${coOrdinator}</p>
          <p><strong>Co-Cordinators</strong> - Abhishek, Meenakshi</p>
          <a href="${data[i].doc_link}" class="btn-pass-4"><button class="View_details_button">
            Get More Info
          </button> </a>
        </div>
      </div>
    `;

    if (data[i].start_date.slice(0, 11) == "2021-10-03"){
      eventDay1.after(eventScheduleHTML);
      eventDay1.after(eventDetailsHTML);
      console.log("MY NAME IS KHAN");
    }
    else if (data[i].start_date.slice(0, 11) == "2021-10-04"){
      eventDay2.after(eventScheduleHTML);
      eventDay2.after(eventDetailsHTML);
    }

    // eventContainer.innerHTML += eventDetailsHTML;
  }
}
fetch("https://cognitia2021.herokuapp.com/api/events/")
  .then((response) => response.json())
  .then((data) => myfun(data));

// DUAL API CALL
// fetch("https://cognitia2021.herokuapp.com/api/events/")
//   .then((response) => response.json())
//   .then((data) => {
//     fetch("https://cognitia2021.herokuapp.com/api/teammembers/")
//       .then((response) => response.json())
//       .then((membersData) => myfun(data, membersData));
//   });
