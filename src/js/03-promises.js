import Notiflix from "notiflix";

const form = document.querySelector('.form');


function handleCreatePromise(e) {
  e.preventDefault()

let firstDelay = Number(form.querySelector('input[name="delay"]').value);
const stepDelay = Number(document.querySelector('input[name="step"]').value);
const amount = Number(document.querySelector('input[name="amount"]').value);

let time = firstDelay;
let delay = firstDelay; 

for (let position = 1; position <= amount; position += 1){
  const promise = new Promise((resolve, reject) => {

    const shouldResolve = Math.random() > 0.3;
   
    setTimeout(() => {
      
      
      if(shouldResolve) {
        resolve({ position, delay })
      } 
        reject({ position, delay });
      
    }, time);
  });
  
  promise
  .then(({ position, delay }) => Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`))
  .catch(({ position, delay }) => Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`));
  time += stepDelay
  
}
};;
form.addEventListener('submit', handleCreatePromise);

