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
      alert(
        `Voce selecionou ${monthNames[currentMonth]} ${i}, ${currentYear} para reunião.`
      );
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
