function changerTitre() {
    var titre = document.getElementById("titre");
    titre.innerHTML = "Nouveau titre WITAJ";
  }
  

  /* nous avons défini la fonction changerTitre(). 
  Cette fonction est appelée lorsque l'utilisateur clique 
  sur le bouton de la page. Elle utilise la méthode getElementById() 
  pour accéder à l'élément avec l'identifiant "titre", et la propriété 
  innerHTML pour modifier son contenu en remplaçant l'ancien titre 
  par un nouveau titre.

  Lorsque l'utilisateur ouvre le fichier index.html dans un 
  navigateur web, le script script.js est chargé et exécuté. 
  Lorsque l'utilisateur clique sur le bouton, 
  la fonction changerTitre() 
  est appelée et modifie le contenu du titre de la page. 

  Ainsi, l'utilisation de fichiers HTML et JavaScript distincts 
  permet de séparer la structure de la page de son comportement dynamique, 
  ce qui peut rendre le code plus facile à maintenir et à modifier.*/
