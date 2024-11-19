// Animation au survol du lien de menu
document.querySelectorAll('.navbar nav ul li a').forEach(item => {
    item.addEventListener('mouseover', () => {
      item.style.color = '#ff6600'; // Changer la couleur au survol
    });
    item.addEventListener('mouseout', () => {
      item.style.color = ''; // Rétablir la couleur d'origine
    });
  });
  
  // Smooth Scroll pour les ancres
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Fonction de validation du formulaire de contact
document.getElementById('contact-form').addEventListener('submit', function(event) {
    // Empêcher l'envoi du formulaire pour la démonstration
    event.preventDefault();
  
    // Récupérer les valeurs du formulaire
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Validation simple
    if (name === "" || email === "" || message === "") {
      alert("Tous les champs doivent être remplis !");
      return false;
    }
  
    // Vérification de l'email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      alert("L'adresse email est invalide.");
      return false;
    }
  
    // Si tout est valide, soumettre le formulaire
    alert("Merci pour votre message, je reviendrai vers vous très bientôt !");
    document.getElementById('contact-form').reset(); // Réinitialiser le formulaire
    return true;
  });
  