
class MyArrayIterator{
    constructor(myArray){
      this.array = myArray;
      this.count = 0;
    }
  
    next(){
      return {
        value: this.array[this.count++],
        done: this.count > this.array.length,
      }
    }
  }
class Animal {
    static isMyArray = function (obj) {
		return obj instanceof this;
	}

	constructor(...args) {
		this.length = 0;
		for (let i = 0; i < args.length; i++) {
			this.push(args[i]);
		}
	}
     run(speed) {
         
            this.speed = speed;
            console.log(`${this.name} бежит со скоростью ${this.speed}.`);
          }
    say(statement){
        this.statement=statement
        console.log( `${this.name} say ${statement}` );
        }
    eat(feed){
        this.feed = feed
        console.log(`${this.name} is eating ${this.feed}`);
        }
         push(...args) {
		if (args) {
			for (let i = 0; i < args.length; i++) {
				this[this.length++] = args[i];
			}
		}
		return this.length;
	}
    }   
   

    class Mammals extends Animal{
        constructor(name, age, weight, limbAmount) {
            super(name, age, weight, limbAmount);
        }

    }
    class Birds extends Animal{
        constructor(name, age, weight, limbAmount) {
            super(name, age, weight, limbAmount);
        }
 
     }
     class Fish extends Animal{
        constructor(name, age, weight, limbAmount) {
            super(name, age, weight, limbAmount);
        }
    
     }
     class Predators extends Mammals{
        constructor(name, age, weight, limbAmount) {
            super(name, age, weight, limbAmount);
        }
    }
    class Whales extends Mammals{
        constructor(name, age, weight, limbAmount) {
            super(name, age, weight, limbAmount);
        }
    }
    class Primates extends Mammals{
        constructor(name, age, weight, limbAmount) {
            super(name, age, weight, limbAmount);
        }
    }
    class Human extends Primates{
        constructor(name, age, weight, limbAmount) {
            super(name, age, weight, limbAmount);
        }
    }
    class Dog extends Predators{
        constructor(name, age, weight, limbAmount) {
            super(name, age, weight, limbAmount);
        }
    }
     class Dolphin extends Whales{
        constructor(name, age, weight, limbAmount) {
            super(name, age, weight, limbAmount);
        }
    }
    const myArr = new Animal();
    const stas =  new Human(`Stas`,30,70,4);
    const maks =  new Human(`Maks`,30,70,4); 
    const mops =  new Dog(`mops`,30,70,4);
    const okuny =  new Whales(`okuny`,30,70,4);
    const whiteDolphin =  new Dolphin(`white-dolphin`,30,70,4);


    myArr.push(mops,okuny,stas,maks,whiteDolphin)
    console.log(myArr);
    
    console.log(Animal.prototype);
    console.log(Primates.prototype);
    console.log(Predators.prototype);
    console.log(Whales.prototype);
    console.log(Dolphin.prototype);
    console.log(Dog.prototype);
    console.log(Human.prototype);
    console.log(Mammals.prototype);
    console.log(Birds.prototype);
    console.log(Fish.prototype);
    console.log(mops.say(`gav`));
    console.log(mops.eat(`Felix`));
    console.log(mops.run(`30km/h`));


    



    

    
