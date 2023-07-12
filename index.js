// Write your code here
//object oriented programming

class Breakfast{
    constructor(food,drink){
        this.food = food;
        this.drink = drink;
    }
}

class Lunch{
    constructor(salad,soup,drink){
        this.salad = salad;
        this.soup = soup;
        this.drink = drink;
    }
}

class Dinner{
    //private fields 
    #dessert;
    constructor(salad,soup,entree,dessert){
        this.#dessert = dessert;
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
    }
}