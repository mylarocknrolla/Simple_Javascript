// Myla Fairchild
// If only this code could cure cancer

var userQuestion = 'Think of a number one through seven. This will provide dinner for you.';
var randomNumber = Math.floor(Math.random() * 7);
var dinnerSolution = "";

switch (randomNumber) {
  case 0:
    dinnerSolution = "Your favorite pizza.";
    break;
  case 1:
    dinnerSolution = "Make it tacos!";
    break;
  case 2:
    dinnerSolution = "Sassy, saucy spaghetti...";
    break;
  case 3:
    dinnerSolution = "Make some tasty tosadas!";
    break;
  case 4:
    dinnerSolution = "Let's do light. How about salad!";
    break;
  case 5:
    dinnerSolution = "Meat and potatoes.";
    break;
  case 6:
    dinnerSolution = "Fish and chips!";
    break;
  case 7:
    dinnerSolution = "Make breakfast for dinner!";
    break;
   default:
    break;
}

    console.log(userQuestion);
    console.log(dinnerSolution);
