document.addEventListener('DOMContentLoaded', () => {

    document.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        const scrollPosition = window.scrollY;

        if (scrollPosition > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });



    /* slider */
    
  const slidesContainers = Array.from(document.querySelectorAll(".slides"));
  const dots = Array.from(document.querySelectorAll(".dots"));
  const prevBtn = document.querySelector(".prevBtn");
  const nextBtn = document.querySelector(".nextBtn");

  let currentSlideIndex = 0;

  function showSlide(index) {
    slidesContainers.forEach((container, i) => {
      if (i === index) {
        container.style.display = "flex";
        container.classList.remove("fade-out");
        container.classList.add("fade-in");
      } else {
        container.style.display = "none";
        container.classList.remove("fade-in");
        container.classList.add("fade-out");
      }
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  function handlePrevButtonClick() {
    currentSlideIndex = (currentSlideIndex - 1 + slidesContainers.length) % slidesContainers.length;
    showSlide(currentSlideIndex);
  }

  function handleNextButtonClick() {
    currentSlideIndex = (currentSlideIndex + 1) % slidesContainers.length;
    showSlide(currentSlideIndex);
  }

  function handleDotClick(event) {
    const clickedDotIndex = parseInt(event.target.dataset.index);
    if (!isNaN(clickedDotIndex)) {
      currentSlideIndex = clickedDotIndex;
      showSlide(currentSlideIndex);
    }
  }

  showSlide(currentSlideIndex);
  prevBtn.addEventListener("click", handlePrevButtonClick);
  nextBtn.addEventListener("click", handleNextButtonClick);
  dots.forEach(dot => dot.addEventListener("click", handleDotClick));

});
