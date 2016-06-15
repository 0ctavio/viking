//este es el constructor
var Viking = function (name, health, strength) {
    this.name = name,
    this.health = health,
    this.strength = strength;
};


//esta es la arena
var pit = function ( ) {
    this.fighters = [ ],
    this.numbersFighters = 0;
};


//añadir vikingos a la arena
pit.prototype.addVikingToPit = function (viking) {
    this.fighters.push (viking);
    //pit.push = ();
};

var viking1 = new Viking ("La montaña", 100, 25);
var viking2 = new Viking ("Thor", 100, 30);

pit.addVikingToPit(viking1);
pit.addVikingToPit(viking2);

//esta es la función que obtiene daño aleatorio
function getDamage(){
    return Math.floor((Math.random() * 20) + 20);
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
