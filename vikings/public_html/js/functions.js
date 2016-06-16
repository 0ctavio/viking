//este es el Constructor

var saxonsArmy = [];


var Saxons = function(health, strength){
  this.health = health,
  this.strength = strength;
};

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

//este es el constructor de la batalla

var Battle = function(){
  this.vikingFighter = [],
  this.numbersVikingFighters= 0;
};

Battle.prototype.addVikingFighter = function(viking) {
  this.vikingFighter.push(viking);
}

var Battle = new Battle();

Battle.addVikingFighter(viking1);
Battle.addVikingFighter(viking2);
Battle.addVikingFighter(viking3);
//funcion para salud y fuerza aleatoria
function getValue(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

function getRandomTurn() {
   return Math.floor(Math.random() * (8 - 5) + 5);
   };

function getName(){
  var nombres = ["Thor", "La Montaña", "Octavio", "Jesús", "Manolo", "Juan", 
  "Paco", "Cristina", "Lorenzo", "Fernando"];

  var randomName = nombres [Math.floor(Math.random()*nombres.length)];
  return randomName;
}

function vikingGenerator (number) {
  var vikingArmy = [];
  for (var i = number; i >= 0; i--) {
    vikingArmy.push(new Viking(getName(), getValue(50, 100), getValue(20, 40)));
  }
  return vikingArmy;
}

var saxon1 = new Saxons(getValue(40, 80), getValue(10, 30));
var saxon2 = new Saxons(getValue(40, 80), getValue(10,30));
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