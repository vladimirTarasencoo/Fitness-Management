export class SuggestDiets {
  breakfasts = [
    "Peanut butter and banana sandwich",
    "Doughnut/Coca-Cola",
    "Eggs and steak, medium rare",
    "Apple turnovers",
    "Eggs Benedict",
    "Graham crackers and hot tea",
    "Cap'n Crunch cereal",
    "Pancakes with gravy",
    "Two waffles, mashed potatoes and some meat",
    "Hard-boiled egg and an orange",
    "Pork loin and cheese",
    "Huevos rancheros con papas",
    "Fresh shrimp, scrambled eggs",
    "Cashew waffles",
    "Cold pizza",
    "Cereal, Reese's Puffs, Cocoa Puffs, beer, eggs",
    "Spaghetti",
    "1 cup of coffee",
    "Liver and grits",
    "Bacon, scrambled eggs with cheese, pancakes with syrup and potatoes O’Brien"
  ];
  lunches = [
    "Quick Italian Spinach Pie",
    "Monte-Cristo-Sandwich",
    "Salade-Nicoise-Sandwich",
    "Roast Beef and Cheddar Roll-Ups",
    "Turkey Salad With Tomato, Avocado, and Parmesan",
    "Smashed White Bean and Avocado",
    "Chef's Salad",
    "Tortilla Soup",
    "Butternut Squash Soup",
    "Cheddar and Apple Sandwich",
    "Satay Chicken Stir-Fry With Snow Peas and Cilantro",
    "Roll-Ups With Bacon, Peas, and New Potatoes",
    "Ham and Cheese Turnovers",
    "Turkey Taco Salad"
  ];
  dinner = [
    "Fried chicken",
    "Omelet",
    "Pizza",
    "Kebab",
    "Fish",
    "Steak",
    "Broth",
    "Tossed salad",
    "Chicken and Broccoli Casserole",
    "Breaded chicken",
    "Chimichangas",
    "Meatloaf",
    "Meatball Subs",
    "Stuffed Pork Chops",
    "Beef & Broccoli",
    "Beef or Pork Tenderloin",
    "Fish ‘N Chips",
    "Crab Cakes",
    "Fettuccine Alfredo",
    "Tomato-Bacon Pasta",
    "Spaghetti and Meatballs",
    "Manicotti",
    "Crockpot Alfredo Lasagna",
    "Tortellini",
    "Spinach-Bacon Mac ‘N Cheese"
  ];
  getBreakfast = _ => this.rand(this.breakfasts);
  getLunch = _ => this.rand(this.lunches);
  getDinner = _ => this.rand(this.dinner);
  rand = type => {
    return type[Math.floor(Math.random() * Math.floor(type.length))];
  }
}

