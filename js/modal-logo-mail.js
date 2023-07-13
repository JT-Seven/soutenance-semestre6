var logos = document.querySelectorAll('.layout-logos-techno-mail .logo-mail');

var descriptions = {
    "./assets/logos/logo-java.png": "- Un langage performant \n - Environnement de développement sécurisé",
    "./assets/logos/logo-spring.png": "- Framework léger \n - Injection de dépendances puissant \n - Extensible grâce a son architecture modulaire",
    "./assets/logos/logo-freemarker.png": "- Un moteur de template puissant \n - Créer des templates réutilisables \n - Connu pour sa performance élevée \n - Intégration facile"
};

logos.forEach(function (logo) {
    logo.addEventListener('click', function () {
        showModalMail(logo);
    });
});

function showModalMail(logo) {
    var description = descriptions[logo.getAttribute('src')];

    var modalBackground = document.createElement('div');
    modalBackground.classList.add('modal-background-mail');

    var modalContent = document.createElement('div');
    modalContent.classList.add('modal-content-mail');

    var logoImage = document.createElement('img');
    logoImage.src = logo.src;
    logoImage.alt = logo.alt;
    logoImage.classList.add('modal-logo-mail');

    var logoDescription = document.createElement('p');
    logoDescription.innerText = description;
    logoDescription.classList.add('modal-description-mail');

    modalContent.appendChild(logoImage);
    modalContent.appendChild(logoDescription);

    modalBackground.appendChild(modalContent);
    document.body.appendChild(modalBackground);

    setTimeout(function () {
        modalBackground.classList.add('active');
        modalContent.classList.add('active');
    }, 10);

    modalBackground.addEventListener('click', function () {
        modalBackground.classList.remove('active');
        modalContent.classList.remove('active');

        setTimeout(function () {
            document.body.removeChild(modalBackground);
        }, 300);
    });
}

