//este es el Constructor
var Saxons = function(health, strength){
  this.health = health,
  this.strength = strength;
};

//este es el Constructor del Vikingo
var Viking = function(name, health, strength) {
  this.name = name,
  this.health = health,
  this.strength = strength;
};

//esta es el Constructor Arena
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


//función Turnos Aleatorios
function getRandomTurn() {
   return Math.floor(Math.random() * (8 - 5) + 5);
   };


//funcion para nombre aleatorio
function getName(){
  var nombres = ["Thor", "La Montaña", "Octavio", "Jesús", "Manolo", "Juan", 
  "Paco", "Cristina", "Lorenzo", "Fernando", "Dani Malo"];

  var randomName = nombres [Math.floor(Math.random()*nombres.length)];
  return randomName;
}


//Añadimos vikingos que entrenaran
var viking1 = new Viking(getName(), getValue(50, 100), getValue(20, 40));
var viking2 = new Viking(getName(), getValue(50, 100), getValue(20, 40));

var pit = new Pit();

pit.addVikingToPit(viking1);
pit.addVikingToPit(viking2);


//esta es la función que obtiene daño aleatorio
Pit.prototype.getDamage = function() {
  return Math.floor((Math.random() * 20) + 20);
};

//Empieza el entrenamiento
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


//COMIENZA LA BATALLA FINAL

//Generamos ejercitos
  var vikingArmy = [];
  var saxonsArmy = [];

function vikingGenerator (number) {
  for (var i = number; i > 0; i--) {
    vikingArmy.push(new Viking(getName(), getValue(50, 100), getValue(20, 40)));
  }
  return vikingArmy;
}

function saxonsGenerator (number) {
  for (var i = number; i > 0; i--) {
    saxonsArmy.push(new Saxons(getValue(30, 80), getValue(10, 30)));
  }
  return saxonsArmy;
}




function startBattle() {
   var turn = getRandomTurn();
   var deathViking = 0;
   var deathSaxons = 0;

   for (var i = 0; i < vikingArmy.length; i++){
   
   /*var vikingLife = vikingArmy[i].health;
   var saxonLife = saxonsArmy[i].health;
   var vikingStreng = vikingArmy[i].strength;
   var saxonStreng = saxonsArmy[i].strength;*/

   var viking = vikingArmy[i];
   var saxon = saxonsArmy[i];
  
   while (turn > 0 && viking.health > 0 && saxon.health > 0) {

    console.log("El vikingo #" + i + " empieza con " + viking.health +  "puntos de SALUD");

    console.log("El saxon #" + i + " empieza con " + saxon.health + "puntos de SALUD");
   
    console.log("El vikingo #" + i + " hace " + viking.strength + " puntos de DAÑO");

    saxon[i].health = saxon[i].health - viking[i].strength;

    console.log("El saxon #" + i + " ahora tien " + saxon[i].health  + " de VIDA");


    
    saxon[i].health = saxon[i].health - viking[i].strength; //golpe del 2 al 1
    
    console.log("La salud de " + viking2.name + " es: " + viking2.health + ". ");
    
    //hostia pal 2
    console.log(viking1.name + " empieza con " + viking1.health);
    console.log(viking2.name + " hace " + viking2.strength + " puntos de daño");
    
    viking1.health = viking1.health - viking2.strength; //golpe del 1 al 2
    
    console.log("La salud de " + viking1.name + " es: " + viking1.health + ". ");
    turn++;
    console.log(turn);
  
     }
  }
};