const HAMBURGER = {
    SIZE_SMALL: {
        param: "SIZE_SMALL", 
        price: 5, 
        calorie: 20
    },
    SIZE_LARGE: {
        param: "SIZE_LARGE", 
        price: 10, 
        calorie: 40
    },
    STUFFING_CHEESE: {
        param: "STUFFING_CHEESE", 
        price: 1, 
        calorie: 20
    },
    STUFFING_SALAD: {
        param: "STUFFING_SALAD", 
        price: 2, 
        calorie: 5
    },
    STUFFING_POTATO: {
        param: "STUFFING_POTATO", 
        price: 1.5, 
        calorie: 10
    },
    TOPPING_SPICE: {
        param: "TOPPING_SPICE", 
        price: 1.5, 
        calorie: 0
    },
    TOPPING_MAYONESSE: {
        param: "TOPPING_MAYONESSE", 
        price: 2, 
        calorie: 5
    }
};

class Hamburger {
    constructor(size, stuffing) {
        this.params = {
            size: size,
            stuffing: stuffing,
            topping: []
        }
    }

    getStuffing() {
        return this.params.stuffing.param;
    }
    addTopping(topping) {
        let thisTopping = this.params.topping;
        let isPresent = 0;
        for (let i = 0; i < thisTopping.length; i++) {
            if (thisTopping[i].param === topping.param) {
                isPresent++;
            }
        }
        if (!isPresent) {
            thisTopping.push(topping);
        } else {
            console.log("Такая добавка уже есть")
        }
    };
    getToppings() {
        return this.params.topping;
    }
    getSize() {
        return this.params.size.param;
    }
    calculatePrice() {
        let thisParams = this.params;
        let totalPrice;
        let mainPrice = thisParams.size.price;
        let stuffingPrice = thisParams.stuffing.price;
        let toppingPrice = 0;
        for (let i = 0; i < thisParams.topping.length; i++) {
            toppingPrice += thisParams.topping[i].price;
        }
        totalPrice = mainPrice + stuffingPrice + toppingPrice;
    
        return totalPrice
    }
    calculateCalories() {
        let thisParams = this.params;
        let totalCalories;
        let mainPrice = thisParams.size.calorie;
        let stuffingPrice = thisParams.stuffing.calorie;
        let toppingPrice = 0;
        for (let i = 0; i < thisParams.topping.length; i++) {
            toppingPrice += thisParams.topping[i].calorie;
        }
        totalCalories = mainPrice + stuffingPrice + toppingPrice;
    
        return totalCalories
    };

}


let burger = new Hamburger(HAMBURGER.SIZE_SMALL, HAMBURGER.STUFFING_CHEESE);
console.log(burger);


console.log(burger.getStuffing());
console.log(burger.addTopping(HAMBURGER.TOPPING_MAYONESSE));
console.log(burger.addTopping(HAMBURGER.TOPPING_SPICE));
console.log(burger.getToppings());
console.log(burger.getSize());

console.log(burger.calculatePrice());
console.log(burger.calculateCalories());



