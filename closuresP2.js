function makeAccount(initial) {
  var balance = initial;
  function withdraw(amount) {
    if (balance - amount >= 0) {
      balance = balance - amount;
      return "Here's your money: $" + amount;
    }
    return "Insufficient funds.";
  }
  return withdraw;
}

var account = makeAccount(100);
account.withdraw(50)
console.log("1. Withdraw money from the account and update the private balance variable")
console.log("2. We need a deposit function that adds money to balance")

function makeAccount(initial) {
  var balance = initial;

  function withdraw(amount) {
    if (balance - amount >= 0) {
      balance -= amount;
      return "Here's your money: $" + amount
    }
    return "Insufficient funds."
   }
  function deposit(amount) {
    balance += amount
    return "Deposited $" + amount
  }
  return {
    withdraw,
    deposit,
  }
}
var account = makeAccount(100)
console.log (account.deposit(50))
console.log (account.withdraw(300))

console.log ("task 2: because account is not a function")

function makeAccount(initial) {
  var balance = initial;
  return {
    withdraw: function(amount) {
        if (balance - amount >= 0){
            balance = balance - amount
            return "Here's your money: $" + amount
        }
        return "Insufficient funds."
    },
    deposit: function(amount){
        balance += amount
        return  "Your balance is: $" + balance
    },
    balance: function (amount) {
        return "this is your balance " + balance
    }
  }
}
var account = makeAccount(100);
console.log(account.withdraw(50));  // => "Here's your money: $50"
console.log(account.withdraw(60));  // => "Insufficient funds."
console.log(account.deposit(10));   // => "Your balance is: $60"
console.log(account.withdraw(60));  // => "Here's your money: $60"
console.log(account.balance())

function makeBookLibrary() {
  var books = [];
  return {
    addBook: function(title) {
        books.push(title)
        return "Added: " + title
    },
    borrowBook: function(title) {
        for (let i = 0 ; i < title.length ; i++){
            if(books[i] === title){
                books.splice(i,1)
                return "Borrowed: " + title
            }
        return "Book not available."
        }
    },
    listBooks: function() {
        return books
    }
  };
}
var library = makeBookLibrary();
library.addBook("1984")
library.addBook("The Hobbit")
console.log (library.listBooks());        // => ["1984", "The Hobbit"]
console.log (library.borrowBook("1984")); // => "Borrowed: 1984"
console.log (library.borrowBook("1984")); // => "Book not available."
console.log (library.listBooks());        // => ["The Hobbit"]

function makeClassmate(name) {
  var grades = [];
  return {
    addGrade: function(grade) {
      grades.push(grade)
      return name + "'s grade added: " + grade
    },
    getAverage: function() {
      let average = 0
      for (let i = 0 ; i < grades.length ; i++){
        average += grades[i]
      }
      if (grades.length === 0){
        return 0
      }
      return average / grades.length
    },
    getGrades: function() {
      return grades
    }
  };
}
var alice = makeClassmate("Alice");
console.log (alice.addGrade(15));  // => "Alice's grade added: 15"
console.log (alice.addGrade(18));  // => "Alice's grade added: 18"
console.log (alice.getAverage());  // => 16.5
console.log (alice.getGrades());   // => [15, 18]

var bob = makeClassmate("Bob");
console.log (bob.addGrade(10));
console.log (bob.getAverage());    // => 10

//I have a comment here : in exersice hunger = 0 but it should be 20 like my code
function makePet(petName) {
  var hunger = 20;
  var happiness = 50;
  return {
    feed: function() {
      hunger = hunger - 20
      if (hunger < 0){
        return hunger = 0
      }
      return petName + " was fed. Hunger: " + hunger
    },
    play: function() {
      happiness = happiness + 15
      if (happiness > 100) {
        return happiness = 100
      }
      return petName + " played! Happiness: " + happiness
    },
    status: function() {
      return {
        name: petName,
        hunger: hunger,
        happiness: happiness
      }
    }
  }
}
var cat = makePet("Whiskers")
console.log(cat.feed());   // "Whiskers was fed. Hunger: 0"
console.log(cat.play());   // "Whiskers played! Happiness: 65"
console.log(cat.status())  // { name: "Whiskers", hunger: 0, happiness: 65 }

function makeScoreboard(player1, player2) {
  var scores = {};
  scores[player1] = 0;
  scores[player2] = 0;
  return {
    addPoint: function(player) {
      scores[player]++
      return player + " scored! Score: " + scores[player]
    },
    getScore: function(player) {
      return scores[player];
    },
    reset: function() {
      scores[player1] = 0;
      scores[player2] = 0;
      return "Scores reset.";
    }
  };
}
var game = makeScoreboard("Alex", "Sam");
console.log(game.addPoint("Alex"));  // => "Alex scored! Score: 1"
console.log(game.addPoint("Sam"));   // => "Sam scored! Score: 1"
console.log(game.addPoint("Alex"));  // => "Alex scored! Score: 2"
console.log(game.getScore("Alex"));  // => 2
console.log(game.getScore("Sam"));   // => 1
console.log(game.reset());           // => "Scores reset.""
console.log(game.getScore("Alex"));  // => 0

//1. A closure is a function that can still use variables from its parent function.
//2. Closures are safer because the data stays private and no one can change it directly.
//3. A method is a function inside an object
//4. Returning an object is useful because we can have many methods working with the same data.
//5. I can use closures in projects like a game scoreboard, a shopping cart..