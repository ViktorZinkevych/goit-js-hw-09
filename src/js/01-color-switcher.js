const startBtn = document.querySelector('[data-start');
const stopBtn = document.querySelector('[data-stop]');
let intervalId = null;

 stopBtn.disabled = true;
 


 function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
  console.log(getRandomHexColor());

  function getIntervalColor(){
    intervalId = setInterval(() => {getRandomHexColor();
        console.log(getRandomHexColor());
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
   
    };
    startBtn.addEventListener("click", () =>{
    
        startBtn.disabled = true;
        stopBtn.disabled = false;
        getIntervalColor();
    });

stopBtn.addEventListener("click", () =>{
    
    startBtn.disabled = false;
    stopBtn.disabled = true;
    clearInterval(intervalId);
});

       
       
