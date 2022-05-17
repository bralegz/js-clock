const date = new Date();
const hour24 = date.toLocaleTimeString("en-us", {hour12: false});
let intervalId;
let day = date.getDay()

// Event Listeners
const timeFormat12 = document.querySelector("#format12");
timeFormat12.addEventListener("click", formatClicked);

const timeFormat24 = document.querySelector("#format24");
timeFormat24.addEventListener("click", formatClicked);

const hourDisplay = document.querySelector(".hour")
hourDisplay.innerHTML = hour24;

let currentDay = document.getElementById(day);


switch (day) {
    case 0:
    //   Sunday
        currentDay.classList.add("today")
      break;
    case 1:
    //   Monday
        currentDay.classList.add("today")
      break;
    case 2:
    //    Tuesday
        currentDay.classList.add("today")
      break;
    case 3:
    //   Wednesday
      currentDay.classList.add("today")
      break;
    case 4:
    //   Thursday
        currentDay.classList.add("today")
      break;
    case 5:
    //   Friday
        currentDay.classList.add("today")
      break;
    case 6:
    //   Saturday
        currentDay.classList.add("today")
  }


intervalId = setInterval( () => {
    hourDisplay.innerHTML = new Date().toLocaleTimeString("en-us", {hour12: false});
}, 1000);


function setTime(id) {
    if(id === "format12") {
        clearInterval(intervalId);
        intervalId = setInterval( () => {
            hourDisplay.innerHTML = new Date().toLocaleTimeString();
        }, 1000);
    } else {
        clearInterval(intervalId);
        intervalId = setInterval( () => {
            hourDisplay.innerHTML = new Date().toLocaleTimeString("en-us", {hour12: false});
        }, 1000);
    }
}


function formatClicked(e) {
    const clickTriggerId = e.target.id;
    if(clickTriggerId === "format12") {
        timeFormat12.classList.add("hour12");
        timeFormat24.classList.remove("hour24");
        setTime(clickTriggerId);

    } else {
        timeFormat12.classList.remove("hour12");
        timeFormat24.classList.add("hour24");
        setTime(clickTriggerId);
    }
}


