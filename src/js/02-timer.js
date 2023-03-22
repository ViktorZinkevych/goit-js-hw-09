import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from "notiflix";
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');
const datetimeEl = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');


function addLeadingZero(value){
    return String(value).padStart(2, '0');
};

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  }

startBtn.disabled = true;

 const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      const selectedDate = selectedDates[0];
      
      if(selectedDate < new Date()){
        Notiflix.Notify.failure('Please choose a date in the future');
        return;
      }else
      {startBtn.disabled = false;
    
      startBtn.addEventListener("click", () => {
        const itervalId = setInterval(() => {
            startBtn.disabled = true;
            const todayDate = new Date();
            const difference = selectedDate - todayDate;
            if(difference <= 0){
                clearInterval(itervalId);
                return
            } 
            const components = convertMs(difference);
            daysEl.textContent = components.days;
            hoursEl.textContent = components.hours;
            minutesEl.textContent = components.minutes;
            secondsEl.textContent = components.seconds;
            

         
        }, 1000);
      })
    }},
  };

  flatpickr(datetimeEl, options);