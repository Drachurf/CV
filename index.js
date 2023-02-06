// slide image profil
document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "images_et_logos/1erdeclass.JPG",
    "images_et_logos/aide.jpeg",
    "images_et_logos/chabal.jpeg",
  ];
  let currentImageIndex = 0;

  //récupérer les élements
  const slider = document.getElementById("image1");
  const leftButton = document.querySelector(".left");
  const rightButton = document.querySelector(".right");

  // mise en place du bouton gauche et droite cf grafikart
  leftButton.addEventListener("click", function () {
    currentImageIndex--;
    if (currentImageIndex < 0) {
      currentImageIndex = images.length - 1;
    }
    slider.src = images[currentImageIndex];
  });

  rightButton.addEventListener("click", function () {
    currentImageIndex++;
    if (currentImageIndex === images.length) {
      currentImageIndex = 0;
    }
    slider.src = images[currentImageIndex];
  });
});


const tableau = [
  "APF",
  "T21",
  "OCR",
  "IFTEM",
  "IRTS",
  "BAC",
  "sport",
  "voyages",
  "MTC",
];
const paragraphs = [
  "Expérience à mi-temps durant laquelle j'ai monté des projets pour des personnes en situations de handicap. Durant ces 3 ans j'ai travaillé en équipe  ",
];

const closeModal = document.createElement("img");
closeModal.src = "images_et_logos/close.svg";
closeModal.style.width = "20px";
closeModal.style.height = "20px";

tableau.forEach((className) => {
  
    //selectionner tous les éléments
  const element = document.querySelector(`.${className}`);
  
  // les ouvrir au click
  element.addEventListener("click", function () {
    
    // et créer les contenants et contenus
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.appendChild(closeModal);
    const modalText = document.createElement("h3");
    modalText.textContent = element.textContent;
    modal.appendChild(modalText);
    const modalParagraphe = document.createElement("p");
    modalParagraphe.innerText = paragraphs;
    modal.appendChild(modalParagraphe);
    document.body.appendChild(modal);

    // fermer les modales au bouton close
    closeModal.addEventListener("click", function () {
      modal.remove();
    });

    // fermer les modales avec ESC ou echapes
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        modal.remove();
      }
    });
  });
});


