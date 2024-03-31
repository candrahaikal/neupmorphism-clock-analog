// Initialize DOM
const analogHour = document.getElementById("clock-hour");
const analogMinute = document.getElementById("clock-minute");
const analogSecond = document.getElementById("clock-second");
const digitalHour = document.getElementById("clock-text-hour");
const digitalMinute = document.getElementById("clock-text-minute");
const digitalSecond = document.getElementById("clock-text-second");
let dateText = document.querySelector('.date-text');


const getTheDate = () => {

  // Get date
  let date = new Date();

  // Assign name of days and months
  let dayStrings = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];
  let monthStrings = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

  // Get date from Date()
  let hours = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let dayNow = date.getDay();
  let dateNow = date.getDate();
  let monthNow = date.getMonth();
  let yearNow = date.getFullYear();

  // Add 0 if clock <= 10
  digitalHour.innerHTML = hours < 10 ? `0${hours}` : hours;
  digitalMinute.innerHTML = minute < 10 ? `0${minute}` : minute;
  digitalSecond.innerHTML = second < 10 ? `0${second}` : second;

  // Set the clock lines
  hours = date.getHours() * 30;
  minute = date.getMinutes() * 6;
  second = date.getSeconds() * 6;

  // Set the transform degrees
  let hourTransform = "-45px";
  let minuteTransform = "-75px";
  let secondTransform = "-65px";

  // Get media screen
  $screenWidthCheck = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  // Media query javascript
  if ($screenWidthCheck <= 400) {
    hourTransform = `-10px`;
    minuteTransform = `-30px`;
    secondTransform = `-10px`;
  } else if ($screenWidthCheck <= 768){
    hourTransform = `-70px`;
    minuteTransform =`-135px`;
    secondTransform = `-145px`;
  }

  // Display result on DOM 
  analogHour.style.transform = `rotateZ(${hours + minute / 12}deg) translateY(${hourTransform})`;
  analogMinute.style.transform = `rotateZ(${minute}deg) translateY(${minuteTransform})`;
  analogSecond.style.transform = `rotateZ(${second}deg) translateY(${secondTransform})`;
  dateText.innerHTML = `${dayStrings[dayNow-1]}, ${dateNow} ${monthStrings[monthNow]} ${yearNow}`;
};

// Call the function every 0.1 seconds
setInterval(getTheDate, 100);