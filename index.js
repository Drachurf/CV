// slide image profil
document.addEventListener("DOMContentLoaded", function() {
    const images = [
      "images_et_logos/1erdeclass.JPG",
      "images_et_logos/aide.jpeg",
      "images_et_logos/chabal.jpeg"
    ];
    let currentImageIndex = 0;

    const slider = document.getElementById("image1");
    const leftButton = document.querySelector(".left");
    const rightButton = document.querySelector(".right");

    leftButton.addEventListener("click", function() {
      currentImageIndex--;
      if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
      }
      slider.src = images[currentImageIndex];
    });

    rightButton.addEventListener("click", function() {
      currentImageIndex++;
      if (currentImageIndex === images.length) {
        currentImageIndex = 0;
      }
      slider.src = images[currentImageIndex];
    });
  });