/*** File holds the people's stories carousel fucntionality 
 * 
 * @author Heloise Lui
 */

document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll('.carousel .carousel-item');
  let currentItem = 0;
  const totalItems = items.length;

  document.getElementById('prev').addEventListener('click', function () {
    moveToPrevItem();
  });

  document.getElementById('next').addEventListener('click', function () {
    moveToNextItem();
  });

  function updateCarousel() {
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove('active');
    }
    items[currentItem].classList.add('active');
  }

  function moveToPrevItem() {
    if (currentItem === 0) {
      currentItem = totalItems - 1;
    } else {
      currentItem--;
    }
    updateCarousel();
  }

  function moveToNextItem() {
    if (currentItem === totalItems - 1) {
      currentItem = 0;
    } else {
      currentItem++;
    }
    updateCarousel();
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll('.carousel .carousel-item');
  let currentItem = 0;
  const totalItems = items.length;
  const intervalTime = 3000; // Tempo em milissegundos para a troca de imagens
  let slideInterval;

  function startSlide() {
    slideInterval = setInterval(moveToNextItem, intervalTime);
  }

  function stopSlide() {
    clearInterval(slideInterval);
  }

  document.getElementById('prev').addEventListener('click', function () {
    moveToPrevItem();
    stopSlide();
    startSlide();
  });

  document.getElementById('next').addEventListener('click', function () {
    moveToNextItem();
    stopSlide();
    startSlide();
  });

  function updateCarousel() {
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove('active');
    }
    items[currentItem].classList.add('active');
  }

  function moveToPrevItem() {
    if (currentItem === 0) {
      currentItem = totalItems - 1;
    } else {
      currentItem--;
    }
    updateCarousel();
  }

  function moveToNextItem() {
    if (currentItem === totalItems - 1) {
      currentItem = 0;
    } else {
      currentItem++;
    }
    updateCarousel();
  }

  startSlide();
});
