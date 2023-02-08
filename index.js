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

const closeModal = document.createElement("img");
closeModal.className = ("butonFermer")
closeModal.src = "images_et_logos/hand-scissors-regular.svg";
closeModal.style.color =  "#0291ef";
closeModal.style.border =  "#0291ef 1px solid";
closeModal.style.width =  "30px";
closeModal.style.height =  "30px";
closeModal.style.borderRadius =  "30px";
closeModal.style.marginLeft =  "850px";
closeModal.style.marginBottom = "-20px"
closeModal.style.background =  "#eed115";




// J'ai reçu de l'aide extérieur pour simplifier mon code, qui à la base répétait chaque élément. Merci A Gaêtan donc !

// créer un tableau
const tableau = [
  "APF",
  "T21",
  "OCR",
  "IFTEM",
  "IRTS",
  "BAC",
  "MTC",
];

//créer les paragraphes
const paragraphes = [
  "Expérience à mi-temps durant laquelle j'ai monté des projets pour des personnes en situations de handicap. Le SAVS (service d'Accueil à la Vie Sociale), propose des accompagnements pour des personnes majeur avec un handicap moteur. Durant ces 3 ans j'ai travaillé en équipe pluriprofessionnelle dans la construction du projet de service et la mise en place d'un charte qualité.",
  "Educateur spécialisé et facilitateur, un terme nouveau quand je travaillais pour l'association trisomie 21. Terme qui s'est répandu rapidement les années suivante. Durante cette expérience professionnelle, j'ai été formé au FALC (Facile A lire et à Comprendre). Cela me permet de mettre en place des documents adaptés aux handicaps. J'ai notamment 'traduit' le projet de service de l'association mais également celle de l'APF. Ici, j'ai accompagné des adultes porteurs de trisomie 21 dans leur intégration sociale",
  "Formation de développer web actuellent en cours. A date (février 2022), j'ai effectué deux projets front-end. L'un en CSS et HTML pour un site web bookie (projet 2). Pour le second j'ai effecuté un second projet (projet 3), où j'ai commencé à apprendre javascript, l'ustilisation des API et de nodeJS . J'ai débuté le projet numéro 4 qui va me permettre d'apprendre la méthode agile et comment fonctionne une équipe pluriprofessionnel du numérique. A la fin de ma formation OpenClassRooms j'aurais également vu du SEO. J'ai un projet avec l'utilisation de React. Enfin le projet N°7 est sur du back-end avec notamment, l'apprentissage d'Express et mangoDB.",
  "La formation proposé par l'IFTEM (Institue de Formation aux Thérapies Energétiques et Manuelles) est disposée sur les temps de weekend. J'ai donc, pendant 5 ans, associé la formation de cette école avec le métier d'éducateur spécialisé. J'ai obtenu le diplôme de praticien en médecine chinoise après ses 5 ans de formation.",
  "Diplôme d'Etat d'Educateur Spécialisé, niveau bac +3, formation de 3 ans donc durant laquelle j'ai effectué 4 stages, 3 de 3 mois et un d'un an. Formation validée avec succès qui m'a permis d'exercer le métier d'éducateur spécialisé  dès la sortie de ma formation.",
  "Diplôme de niveau bac technologique, domaine Science Technologique Sanitaire et Sociale.",
  "Durant 4 années, j'ai été auto-entrepreneur, dans l'accompagnement au bien-être pour les clients venant me voir. Après avoir aidé des individus dans le cadre social de mon métier d'éducateur spécialisé, j'ai souhaité accompagner des personnes différemments et dans une approche holistique différentes. Projet qui m'a beaucoup plus durant ces 4 années avec une autonomie importante du fait que je sois mon propre patron.",
];

//Appler toutes les class et lancer une function click
tableau.forEach((className, index) => {
  const element = document.querySelector(`.${className}`);

  element.addEventListener("click", function () {
    //créer les éléments dans chaque div
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.appendChild(closeModal);
    const modalText = document.createElement("h3");
    modalText.textContent = element.textContent;
    modal.appendChild(modalText);
    const modalParagraphe = document.createElement("p");
    modalParagraphe.innerText = paragraphes[index];
    modalParagraphe.style.textAlign =  'justify';
    modal.appendChild(modalParagraphe);
    document.body.appendChild(modal);

    //fermer les modales 
    closeModal.addEventListener("click", function () {
      modal.remove();
    });

    // fermer les modales avec Echapes
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        modal.remove();
      }
    });
  });
});

// Ou est Charlie ?
  var footer = document.querySelector("footer"); 
  var body = document.querySelector("body"); 
  var main = document.querySelector("main"); 
  var nav = document.querySelector("nav")
  const hrs = document.querySelectorAll('hr');
  var amotivation = document.getElementsByClassName("amotivation")[0];
  var pcharlie = document.getElementsByClassName("pcharlie")[0];
  var  btnCV = document.getElementsByClassName("btnCV")[0];
 
  console.log(amotivation);


  
  document.querySelector(".btnCharlie").addEventListener("click", function(){
    nav.style.display ="none";
    main.style.display = "none";
    amotivation.style.display = "none";
    pcharlie.style.display = "none";
    btnCV.style.display = "flex";
    body.style.backgroundImage = "url('images_et_logos/Ou-est-charlie-coffret-collector-integrale-7-ablums-fond-martin-handford-01.jpg')";
    body.style.backgroundSize = "cover";
    body.style.backgroundRepeat = "no-repeat";
    body.style.width = "98%";
    body.style.height = "100%";
    hrs.forEach(hr => {
      hr.style.display = "none";

    });
  });
  
  document.querySelector(".btnCV").addEventListener("click", function(){
    main.style.display = "block";
    nav.style.display ="flex";
    amotivation.style.display = "block";
    pcharlie.style.display = "";
    body.style.backgroundImage = "";
    body.style.width = "";
    body.style.height = "";
    footer.style.color = ""
    footer.style.display = "";
    btnCV.style.display = "none";
    hrs.forEach(hr => {
      hr.style.display = "";
    });
  });


