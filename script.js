let pkmTrainer = {
	name: 'Ash',
	age: 18,
	pokemon: ['Pikachu', 'Gardevoir', 'Charizard'],
    friends: {
    	Carl:['Lechonk', 'Aggron'],
    	Misty:['Applin', 'Bibarel'] 

    },
    talk: function(){
    	console.log("Pikachu! I choose you!");

    }
};

console.log(pkmTrainer.name);
console.log(pkmTrainer.age);
console.log(pkmTrainer.pokemon);

pkmTrainer.talk();

function Pokemon(name, level, health,attack){
	//properties
	this.name = name;
	this.level = level;
	this.health = health * 10;
	this.attack = attack * 5;

	this.tackle = function(target){
 	   console.log(`${this.name} used Tackle on ${target.name}!`);
 	   console.log(this.attack)
 	var total = target.health - this.attack;
 	   console.log(`${target.name}'s health is reduced to ` + total);
 	
 	if(target.health <= 0){
 		target.faint();
 	}
 }
 this.faint = function(target){
 	console.log(`${this.name} used Faint on ${target.name}!`);
    console.log(`${target.name} is now fainted!`);
 }
}

let pikachu =   new Pokemon("Pikachu", 5, 10, 6);
let gardevior = new Pokemon("Gardevoir", 7);
let charizard =  new Pokemon("Charizard", 3);
let lechonk =  new Pokemon("Lechonk",3 ,15 ,2);
  


pikachu.tackle(lechonk)
pikachu.faint(lechonk)




