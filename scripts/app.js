/********************/
/*Trainée du curseur*/
/********************/


// Sélectionner la section
const aboutSection = document.querySelector('#about-section');

// Créer l'élément du curseur personnalisé
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

// Créer une fonction pour suivre le mouvement du curseur
function followCursor(e) {
  // Définir la position du curseur
  cursor.style.left = e.pageX + 'px';
  cursor.style.top = e.pageY + 'px';

  // Ajouter l'effet de traînée à chaque mouvement
  const trail = document.createElement('div');
  trail.classList.add('custom-cursor');
  trail.style.left = e.pageX + 'px';
  trail.style.top = e.pageY + 'px';
  trail.style.opacity = 1;
  document.body.appendChild(trail);

  // Animation de la taille et de l'opacité de la traînée
  setTimeout(() => {
    trail.style.opacity = 0;
    trail.style.transform = 'scale(0.5)';
    trail.style.transition = 'opacity 0.5s, transform 0.5s';
  }, 0);

  // Supprimer la traînée après l'animation
  setTimeout(() => {
    trail.remove();
  }, 500);
}

// Ajouter un événement de mouvement pour le curseur dans la section
aboutSection.addEventListener('mousemove', followCursor);

// Ajouter un événement pour entrer dans la section
aboutSection.addEventListener('mouseenter', () => {
  aboutSection.classList.add('active');
});

// Ajouter un événement pour sortir de la section
aboutSection.addEventListener('mouseleave', () => {
  aboutSection.classList.remove('active');

  // Supprimer toutes les traînées restantes
  const allTrails = document.querySelectorAll('.custom-cursor');
  allTrails.forEach(trail => trail.remove());
});
