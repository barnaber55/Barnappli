// Attendre que le HTML soit complètement chargé avant d'exécuter le code
document.addEventListener('DOMContentLoaded', function() {
  // Récupérer le bouton par son ID "monBouton"
  const bouton = document.getElementById('monBouton');
  
  // Ajouter un écouteur d'événement pour détecter quand on clique sur le bouton
  bouton.addEventListener('click', function() {
    // Quand on clique, afficher une alerte avec un message de félicitations
    alert('Bravo barnaber55, ça marche !');
  });
});