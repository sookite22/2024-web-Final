var slides = document.querySelectorAll("#slides > img");
var slidesContainer = document.getElementById("slides"); // 슬라이드 컨테이너
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var current = 0;

startSlideShow(); // 슬라이드 쇼 시작

prev.onclick = () => {
    stopSlideShow();
    prevSlide();
    startSlideShow();
};

next.onclick = () => {
    stopSlideShow();
    nextSlide();
    startSlideShow();
};

function showSlides(n) {
  // translateX - n번째 이미지를 보이게 하기 위함
  slidesContainer.style.transform = `translateX(${-n * 100}%)`;
}

function prevSlide() {
  if (current > 0) current -= 1; // current값이 0보다 크면 이전 위치로
  else
      current = slides.length - 1; // 마지막 위치로
  showSlides(current); // 이동한 위치의 이미지 표시
}

function nextSlide() {
  if (current < slides.length - 1) current += 1; // current값이 2보다 작으면 다음 위치로
  else
      current = 0; // 첫 번째 위치
  showSlides(current); // 이동한 위치의 이미지 표시
}

// 슬라이드 쇼 자동 실행
function startSlideShow() {
  slideInterval = setInterval(nextSlide, 5000); // 5초마다 다음 슬라이드로
}

// 슬라이드 쇼 중지
function stopSlideShow() {
  clearInterval(slideInterval); // 슬라이드 쇼 정지
}

showSlides(current); // 현재 이미지
prev.onclick = prevSlide; // 이전 이미지 표시
next.onclick = nextSlide; // 다음 이미지 표시

function showSlides(n) {
    for (let i = 0; i < slides.length; i++) { // 처음부터 끝까지 반복
      slides[i].style.display = "none"; // 모든 이미지 화면에서 감춤
    }
    slides[n].style.display = "block"; // n번째 이미지만 표시
  }
  
  function prevSlide() {
    if (current > 0) current -= 1; // current값이 0보다 크면 이전 위치로
    else
      current = slides.length - 1; // 마지막 위치로
      showSlides(current); // 이동한 위치의 이미지 표시
  }
  
  function nextSlide() {
    if (current < slides.length - 1) current += 1; // current값이 2보다 작으면 다음 위치로
    else
      current = 0; // 첫 번째 위치로
      showSlides(current); // 이동한 위치의 이미지 표시
  }

  