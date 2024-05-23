let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll(".slide");
    let indicatorContainer = document.querySelector(".indicator-container");
    
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    
    slides.forEach((slide, index) => {
        slide.style.transition = "transform 1s ease-in-out";
        slide.style.transform = `translateX(${-slideIndex * 100}%)`;
    });

    // Limpe os indicadores existentes
    indicatorContainer.innerHTML = "";

    // Crie e adicione os novos indicadores
    slides.forEach((slide, index) => {
        let indicator = document.createElement("span");
        indicator.classList.add("indicator");
        if (index === slideIndex) {
            indicator.classList.add("active");
        }
        indicator.onclick = () => {
            slideIndex = index;
            showSlides();
        };
        indicatorContainer.appendChild(indicator);
    });
}

function plusSlides(n) {
    slideIndex += n;
    showSlides();
}

// Função para avançar os slides automaticamente a cada 10 segundos
function autoSlides() {
    plusSlides(1);
}

// Inicialize o slider
showSlides();

// Inicie o temporizador para avançar os slides automaticamente a cada 10 segundos
setInterval(autoSlides, 8000); // 10000 milissegundos = 10 segundos






function menuShow() {
  let menuMobile = document.querySelector('.mobile-menu');
  if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open');
      document.querySelector('.icon').src = "assets/img/menu.svg";
  } else {
      menuMobile.classList.add('open');
      document.querySelector('.icon').src = "assets/img/close.svg";
  }
}






  const daysEL = document.getElementById("days");
  const hoursEL = document.getElementById("hours");
  const minsEL = document.getElementById("mins");
  const secondsEL = document.getElementById("seconds");
  
  const newYears = "03 Nov 2024";
  
  function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
  
    const totalSeconds = (newYearsDate - currentDate) / 1000;
  
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
  
    daysEL.innerHTML = days;
    hoursEL.innerHTML = formatTime(hours);
    minsEL.innerHTML = formatTime(mins);
    secondsEL.innerHTML = formatTime(seconds);
  }
  
  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }
  
  countdown();
  setInterval(countdown, 1000);
  