import './style.scss';
import $ from 'jquery';
// import axios from 'axios';

// Popup
var popup = '<div class="popup"><p>Partie terminée</p></div>';
$('body').prepend(popup);

// Perso
var perso = '<div class="perso"></div>';
$('body').prepend(perso);
var persoWidth = $('.perso').width();
// Position gauche de départ du perso
var leftPosition = Number($('.perso').css('left').slice(0, -2));

// Ligne d'arrivée
var finishLine = '<div class="finish-line"></div>';
$('body').prepend(finishLine);

var test = setInterval(function () {
// Récupère la largeur du body
  var finishLineLeftSide = $('.finish-line').position().left;

  // Récupère la position du côté droit du rectangle en déplacement
  var persoRightSide = Math.round($('.perso').position().left) + persoWidth;

  // Animation permettant au personnage de bouger
  $('.perso').animate({
    left: leftPosition += (finishLineLeftSide - 50) / 2,
  }, 1000 * 10, 'linear');

  // Compare la position du côté gauche de la finish line et la position du côté droit du perso
  // Si la position du côté droit du perso est >= à la position du côté gauche de la finish line
  if (persoRightSide >= finishLineLeftSide) {
    // L'interval s'arrête, l'animation s'arrête et une popup apparaît
    clearInterval(test);
    $('.perso').stop(true);
    $('.popup').css('display', 'block');

    console.log(`Finish line left postion : ${finishLineLeftSide}`);
    console.log(`Right side position : ${persoRightSide}`);
  }
}, 1000);
