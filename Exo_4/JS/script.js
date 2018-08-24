var nombre = prompt('Choisis un chiffre entre 1 et 4');
var A = document.getElementById('A');

if (nombre == 1) {
  pp.innerHTML = "You are the ONE for me";
  A.style.background = 'green';
}

else if (nombre == 2) {
  pp.innerHTML = "Just the TWO of us";
  A.style.background = 'blue';
}

else if (nombre == 3) {
  pp.innerHTML = "THREE trees in the forest";
  A.style.background = 'grey';
}

else if (nombre == 4) {
  pp.innerHTML = "I can do this 4 U";
  A.style.background = 'purple';
}

else {
  pp.innerHTML = "J'ai dis entre 1 et 4, darling !";
  A.style.border = 'none';
}
