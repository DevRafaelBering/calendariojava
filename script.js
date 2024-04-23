const currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

var diasDaSemana = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let meses = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function getFormattedDate(date) {
  return `${diasDaSemana[date.getDay()]}, ${
    meses[date.getMonth()]
  } ${date.getDate()}`;
}

function displayCalendar() {
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const monthYear = document.getElementById("monthYear");
  monthYear.textContent = monthNames[currentMonth] + " " + currentYear;

  const daysContainer = document.getElementById("days");
  daysContainer.innerHTML = "";

  for (let i = 0; i < firstDayOfMonth; i++) {
    const emptyDay = document.createElement("div");
    daysContainer.appendChild(emptyDay);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const day = document.createElement("div");
    day.textContent = i;
    day.classList.add(`day-${i}`);

    if (i === currentDay) {
      day.classList.add("current-day");
    }

    day.onclick = () => {
      const dataEsperada = new Date(currentYear, currentMonth, i);
      const selectedDate = document.getElementsByClassName("selected-date")[0];
      selectedDate.innerHTML = `<p>${getFormattedDate(dataEsperada)}</p> `;
      var items30 = ["15:00", "15:30", "16:00", "16:30"];
      var items60 = ["14:00", "15:00", "16:00", "17:00"];
      var buttonContainer = document.getElementById("button-container");
      let options = document.querySelectorAll("#dropdown-time .option");
      options.forEach((option) => {
        option.addEventListener("click", () => {
          const valor = option.value;
          if (valor == "30") {
            buttonContainer.innerHTML = "";
            items30.forEach(function (item) {
              var button = document.createElement("button");
              button.textContent = item;
              button.className = "btn";
              buttonContainer.appendChild(button);
            });
          } else {
            buttonContainer.innerHTML = "";
            items60.forEach(function (item) {
              var button = document.createElement("button");
              button.textContent = item;
              button.className = "btn";
              buttonContainer.appendChild(button);
            });
          }
        });
      });

      buttonContainer.innerHTML = "";
    };
    daysContainer.appendChild(day);
  }
}

function prevMonth() {
  currentMonth -= 1;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear -= 1;
  }
  displayCalendar();
}

function nextMonth() {
  currentMonth += 1;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear += 1;
  }
  displayCalendar();
}

displayCalendar();
