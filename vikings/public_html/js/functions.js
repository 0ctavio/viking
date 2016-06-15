//este es el Constructor
var Viking = function (name, health, strength) {
    this.name = name,
    this.health = health,
    this.strength = strength;
};

//esta es el Constructor arena
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


function combat( ) {
    var turns = 0;
    while (turns < 8) {
        var firstHit = viking2.health - viking1.strength;



        console.log(viking2.name + " el vikingo 2 empieza con " + viking2.health);
        console.log(viking1.name + " hace " + viking1.strength + " puntos de daño");
        console.log("La salud de " + viking2.name + " es: " + firstHit + ". ");
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
