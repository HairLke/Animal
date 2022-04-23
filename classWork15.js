
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
           super(name);
    }
    class Birds extends Animal{
            super(name);
 
     }
     class Fish extends Animal{
            super(name);
    
     }
     class Predators extends Mammals{
    
            super(name);
  
    }
    class Whales extends Mammals{
            super(name);
    }
    class Primates extends Mammals{
            super(name);
        }
    class Human extends Primates{
            super(name);
        }
    
    class Dog extends Predators{
            super(name);

        }
    
     class Dolphin extends Whales{
            super(name);

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


    



    

    
