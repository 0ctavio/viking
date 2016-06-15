//este es el constructor
var Viking = function (name, health, strength) {
    this.name = name,
    this.health = health,
    this.strength = strength;
};


//esta es el constructor arena
var Pit = function ( ) {
    this.fighters = [ ],
    this.numbersFighters = 0;
};


//añadir vikingos a la arena
Pit.prototype.addVikingToPit = function (viking) {
    this.fighters.push (viking);
};

//esta es la función que obtiene daño aleatorio
Pit.prototype.getDamage = function ( ) {
    return Math.floor((Math.random ( ) * 20) + 20);
};

var viking1 = new Viking ("La montaña", getHealth (50, 100), getStrength(20, 40));
var viking2 = new Viking ("Thor", getHealth (50, 100), getStrength(20, 40));

Pit.addVikingToPit(viking1);
Pit.addVikingToPit(viking2);


//funcion para fuerza aleatoria
function getStrength (min,max) {
    return Math.floor(Math.random ( ) * (max-min) + min);
};


function getHealth (min,max) {
    return Math.floor(Math.random ( ) * (max-min) + min);
};





















/*
function getDamage() {
    var pointsDamage = Math.floor((Math.random() * 20) + 20);
    function checkDamage() {
        return pointsDamage;
    }
    return pointsDamage;
}

var randomDamage = getDamage();

*/
