let menu = {
    _courses: {
      appetizers:[], 
      mains:[],
      desserts:[],
    },
    get courses() {return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts}},
    get appetizers() {},
    set appetizers(appetizersCourse) {},
    get mains() {},
    set mains(mainsCourse) {},
    get desserts() {},
    set desserts(dessertsCourse) {},
  
    addDishToCourse(courseName,dishName,dishPrice) {const dish = {dishName : dishName, dishPrice : dishPrice};
     this._courses[courseName].push(dish)},
  
  
     getRandomDishFromCourse(courseName) {
  
       let dishes = this._courses[courseName];
       let randomDish = Math.random() * dishes.length;
       randomDish = Math.floor(randomDish);
  
       return dishes[randomDish];
     },
    
  
    generateRandomMeal() {
  
      let appetizer = this.getRandomDishFromCourse('appetizers');
  
      let main = this.getRandomDishFromCourse('mains');
      let dessert = this.getRandomDishFromCourse('desserts');
  
      let totalPrice = appetizer.dishPrice + main.dishPrice + dessert.dishPrice;
      return `Your meal will be composed of: 
    ${appetizer.dishName} to start, as a main ${main.dishName} and ${dessert.dishName} for dessert.
    
    Total costs will be ${totalPrice}. 
    
    Enjoy your meal!`
      },
    };
  
    menu.addDishToCourse('appetizers','tuna tartar',9.50);
    menu.addDishToCourse('appetizers','breadroll',4.00);
    menu.addDishToCourse('appetizers','bread and olives',3.50);
    //12.2 mains
    menu.addDishToCourse('mains','steak',13.00);
    menu.addDishToCourse('mains','game goulash', 12.50);
    menu.addDishToCourse('mains','caeser salad',9.00);
    // 12.3 desserts
    menu.addDishToCourse('desserts','Sweet Roll',4.00);
    menu.addDishToCourse('desserts','scoop of ice cream',1.50);
    menu.addDishToCourse('desserts','big cheese plater',7.00);
  
   let meal = menu.generateRandomMeal()
  console.log(meal);