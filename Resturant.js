class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products) {
        // Itearte through the input array
        for (let element of products) {
            let [product, quantity, price] = element.split(' ');
            quantity = Number(quantity);
            price = Number(price);

            // Condition statement for the money
            if (price <= this.budgetMoney) {
                this.budgetMoney -= price;
                this.history.push(`Successfully loaded ${quantity} ${product}`);

                // Condition statement, if the product exists
                if (!this.stockProducts.hasOwnProperty(product)) {
                    this.stockProducts[product] = 0;
                }
                // Add new quantity
                this.stockProducts[product] += quantity;
            } else {
                this.history.push(`There was not enough money to load ${quantity} ${product}`);
            }
        }

        return this.history.join('\n');
    }

    addToMenu(meal, productArr, price) {
        // Remake new Array from arrays with validation of the information
        let neededProducts = [];

        for (let strSequence of productArr) {
            let [product, quantity] = strSequence.split(' ');
            quantity = Number(quantity);

            neededProducts.push([product, quantity]);
        }

        if (this.menu.hasOwnProperty(meal)) {
            return `The ${meal} is already in the our menu, try something different.`;
        }
        // Information about products count
        this.menu[meal] = { products: neededProducts, price };
        let mealCount = Object.keys(this.menu).length;

        // Condition statement about meal quantity
        if (mealCount == 1) {
            return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
        } else if (!mealCount || mealCount >= 2) {
            return `Great idea! Now with the ${meal} we have ${mealCount} meals in the menu, other ideas?`;
        }

    }

    // The method return all meals from our menu separated by a new line 
    showTheMenu() {
        let menuEntries = Object.entries(this.menu);
        let mealCount = menuEntries.length;

        if (!mealCount) {
            return 'Our menu is not ready yet, please come later...';
        }

        let stringArr = [];
        for (let [meal, mealInfoObj] of menuEntries) {
            stringArr.push(`${meal} - $ ${mealInfoObj.price}`);
        }

        return stringArr.join('\n');
    }

    // This method searches the menu for a certain meal
    makeTheOrder(meal) {
        if (!this.menu.hasOwnProperty(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }

        for (let meal in this.menu) {
            let products = this.menu[meal].products;
            for (let [product, quantity] of products) {
                if (!this.stockProducts.hasOwnProperty(product)) {
                    return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
                }

                if (this.stockProducts[product] < quantity) {
                    return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
                }
            }

            products.forEach(([product, quantity]) => {
                this.stockProducts[product] - quantity;
            });

            this.budgetMoney += this.menu[meal].price;
            return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
        }
    }
}


