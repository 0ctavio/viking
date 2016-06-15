var pit = [];

var Viking = function (name, health, strength) {
    this.name = name,
    this.health = health,
    this.strength = strength;
};

function getDamage(){
    return Math.floor((Math.random() * 20) + 20);
}

function addVikingToPit(name, health, strength) {
    var vinking = new Viking(name, health, strength);
    
}


/*
function getDamage() {
    var pointsDamage = Math.floor((Math.random() * 20) + 20);
    function checkDamage() {
        return pointsDamage;
    }
    return checkDamage;
}

var randomDamage = getDamage();
*/



function getDamage() {
    var pointsDamage = Math.floor((Math.random() * 20) + 20);
    function checkDamage() {
        return pointsDamage;
    }
    return pointsDamage;
}

var randomDamage = getDamage();

//------------------
function getDamage() {
    return function (){
        Math.floor((Math.random() * 20) + 20);
    };
}

var randomDamage = getDamage();

//---------------

function getDamage() {
    return function (){
var x = Math.floor((Math.random() * 20) + 20);
        
    };
}

var randomDamage = getDamage();