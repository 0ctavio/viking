//este es el Constructor



var Viking = function(name, health, strength) {
  this.name = name,
    this.health = health,
    this.strength = strength;
};

//esta es el Constructor arena
var Pit = function() {
  this.fighters = [],
    this.numbersFighters = 0;
};

//añadir vikingos a la arena
Pit.prototype.addVikingToPit = function(viking) {
  this.fighters.push(viking);
};


//funcion para salud y fuerza aleatoria
function getValue(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

var viking1 = new Viking("La montaña", getValue(50, 100), getValue(20, 40));
var viking2 = new Viking("Thor", getValue(50, 100), getValue(20, 40));

var pit = new Pit();
pit.addVikingToPit(viking1);
pit.addVikingToPit(viking2);




//esta es la función que obtiene daño aleatorio
Pit.prototype.getDamage = function() {
  return Math.floor((Math.random() * 20) + 20);
};

function combat() {
  var turns = 0;
  while (turns < 8 && viking2.health > viking1.strength && viking1.health > viking2.strength) {

    console.log(viking2.name + " empieza con " + viking2.health);
    console.log(viking1.name + " hace " + viking1.strength + " puntos de daño");
    
    viking2.health = viking2.health - viking1.strength; //golpe del 2 al 1
    
    console.log("La salud de " + viking2.name + " es: " + viking2.health + ". ");
    
    //hostia pal 2
    console.log(viking1.name + " empieza con " + viking1.health);
    console.log(viking2.name + " hace " + viking2.strength + " puntos de daño");
    
    viking1.health = viking1.health - viking2.strength; //golpe del 1 al 2
    
    console.log("La salud de " + viking1.name + " es: " + viking1.health + ". ");
    turns++;
  }
};
 
 
 
 
 
 
 
 /*
 function combat( ) {
    var viking1Strength = viking1.strength;
    var viking2Health = viking2.health - viking1Strength;
    
    var viking2Strength = viking2.strength;
    var viking1Health = viking1.health - viking2Strength;
    
    var turns = 0;
    
    do {
        console.log (viking2.name + " el vikingo 2 empieza con " + viking2.health);
        console.log (viking1.name + " hace " + viking1Strength + " puntos de daño");
        console.log("La salud de " + viking2.name + " es: " + viking2Health + ". ");
        turns++;
        
    } while (turns < 8 || viking2Health < viking1Strength || viking1Health < viking2Strength);
}
 
 
 
 
 /*
function combat() {
    
    if (cipher_char == from_char) {
    result = result + to_char;
            x++;
            } else if () {

    }

   else
            result = result + clear_char;
}




















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
