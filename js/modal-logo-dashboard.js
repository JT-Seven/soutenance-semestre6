var logosMail = document.querySelectorAll('.layout-logos-techno-dashboard .logo-dashboard');

var descriptionsMail = {
    "./assets/logos/logo-angular.png": "- Structure solide et modulaire \n - Performant \n - Facilité d'intégration",
    "./assets/logos/logo-nx.png": "- Architecture évolutive (monolithiques) \n - Gestion efficace des dépendances \n - Prise en charge native des frameworks \n - Capacité de partager du code",
    "./assets/logos/logo-ts.png": "- Typage statique \n - Outil de développement solide",
    "./assets/logos/logo-ngrx.png": "- Gestion d'état centralisée \n - Flux de données unidirectionnel \n - Asynchronicité \n - Écosystème mature avec ses outils et ses extensions",
    "./assets/logos/logo-strapi.png": "- Flexible \n - Interface utilisateur \n - Architecture basée sur des API \n - Personnalisation avancée (Hooks et plugins)",
    "./assets/logos/logo-fullcalendar.png": "- Créer des agendas et des calendriers interactifs \n - Prise en charge de diverses vues \n - Personnalisation avancée (apparence et comportement)"
};

logosMail.forEach(function (logo) {
    logo.addEventListener('click', function () {
        showModal(logo);
    });
});

function showModal(logo) {
    var description = descriptionsMail[logo.getAttribute('src')];

    var modalBackground = document.createElement('div');
    modalBackground.classList.add('modal-background');

    var modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    var logoImage = document.createElement('img');
    logoImage.src = logo.src;
    logoImage.alt = logo.alt;
    logoImage.classList.add('modal-logo');

    var logoDescription = document.createElement('p');
    logoDescription.innerText = description;
    logoDescription.classList.add('modal-description');

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