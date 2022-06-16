# JS-Class-Resturant

The constructor have 4 properties:
-	budgetMoney - type number;
-	menu - empty object;
-	stockProducts - empty object;
-	history - empty array;

At initialization of the Restaurant class, the constructor accepts only the budgetMoney! The rest of the properties must be empty!

Class-Methods:

a) Method: loadProducts() 
- Accept 1 argument products (array from strings);
- This method appends products into our products in stock (stockProducts) under the following circumstances:
    * If the budget allows us to buy the current product, we add it to stockProducts keeping the name and quantity of the meal, and we deduct the price of the product from our budget;
    * If the current product already exists into stockProducts, just add the new quantity to the old one;
    * If we were able to add the current product, print the correct message;

b) Method: addToMenu()
- Accept 3 arguments meal (string), needed products (array from strings) and price (number);
- If the meal is not in our menu, appends a meal into object menu;
- Check how many meals have in menu and returns one of the correct messages;

c) Method: showTheMenu()
- This method just return all meals from our menu separated by a new line;

d) Method: makeTheOrder()
- Accept 1 argument meal (string);
- This methpd searches the menu for certain meal;
- If statement to check if the current meal;
- Reducing the quntity of all products from those in stock and add the price to the total budget;




