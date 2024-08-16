//! OBJECTS

//Comparable to arrays just more detailed - short summary - michael


//Syntax for objects
let favoriteCharacter = {
    fName: "Bob",
    lName: "Ross",
    hobbies: ["painting", "Animal Caring"],
    occupations: ["Drill Sargent", "Artist", "Tv Personality"],
    age: 52,
    currentHealth: "Dead",
    catchphase: quoter()
};

//This calls the entire object data.
console.log(favoriteCharacter);
//Calling one of the property values:
console.log(`My favorite character's first name is ${favoriteCharacter.fName}`);
//Calling a property that has a ARRAy data type
console.log(`One of my favorite character's hobbies is ${favoriteCharacter.hobbies[1]}`);

//This will update a property value
favoriteCharacter.currentHealth = "Alive and well in spirit!";

console.log(favoriteCharacter.currentHealth);

//ADDING a NEW property to the object variable
favoriteCharacter.paintingSkills = "HE WAS SO GOOOD!";

console.log(favoriteCharacter.paintingSkills);

//objects can store functions
function quoter() {
    let quote = "There are no mistakes only happy accidents."
    return quote
}

console.log(quoter());

//! Arrays of Objects

let listOfMusic = [
    {
        title: 'Never gonna give you up',
        artist: 'Rick Astley',
        year: 1987,
    },
    {
        title: 'Black Magic Woman',
        artist: 'Santana',
        year: 1960
    }
];
//Format nameOfVar[index's #] = the whole object in that index
console.log(`${listOfMusic[0].title} will grab the whole object title`);

//returns the whole object as long as it's not in a string
console.log(listOfMusic[1]);

//Gives you the length of Properties in a object.
let currentObjectLength = Object.keys(listOfMusic[0]).length;
console.log(`${currentObjectLength} is the number properties`);

//This will return object object. Specify whatcha need from this object!
console.log(`${listOfMusic[1]} will return object object`);



//! Personal Contact Book
//? Create a simple contact book where you can add, view, and search for contacts by name.

//TODO Define a Contact Object: Each contact should be represented as an object with properties like name, phone number, and email.
let contact = {
    fName: "Bryan",
    lName: "Hahaha",
    phone: "555-555-5555",
    email: "GotyaHaha@gmail.com"
};
//TODO Store Contacts in an Array: Use an array to store multiple contact objects.
let contacts = [contact];

//TODO Create Functions: Craeate functions to add a contact, view all contacts, and search for a contact by name.
function addContact(newContact) {
    contacts.push(newContact);
    console.log("Contact Added Success");
}
/*
function addContact(contactName, contactPhone, contactEmail){
    let contactObject = {
        fname: contactName,
        phone: contactPhone,
        email: contactEmail
    }
    console.log(contactObject)
}
    */

function DisplayContact() {

    listCount = 0;
    console.log("Contact List:");
    //FOR OF WAY
    for (let c of contacts) {
        listCount++;
        console.log(`${listCount}. ${c.fName} ${c.lName}\n\t\tMobile: ${c.phone}\n\t\tEmail: ${c.email} `);
    }
    //FOR LOOP WAY
    //for (let i = 0; i < contacts.length; i++) {
    //console.log(`${listCount}. ${contacts[i].fName} ${contacts[i].lName}\n\t\tMobile: ${contacts[i].phone}\n\t\tEmail: ${contacts[i].email} `);
}

function SearchContact(name) {
    for (let c of contacts) {
        if (c.fName.toLowerCase() === name.toLowerCase() || c.lName.toLowerCase() === name.toLowerCase()) {
            console.log(`Found Contact: ${c.fName} ${c.lName} - Mobile: ${c.phone} - Email: ${c.email}`);
            return;
        }
    }
    console.log("ERROR: Contact cannot be found");
}

//* Output Results: Use console.log to display the contacts and search results.

addContact({ fName: "Nicole", lName: "Stabber", phone: "123-456-7890", email: "Stabber69@yahoo.com" });
DisplayContact();
SearchContact("stabber");



//! Student Grade Management
//? Create a program to manage student grades, where you can calculate the average grade for the class and identify students who need to improve.

//TODO Predefine Student Objects: Each student should be an object with properties like name and grade, stored inside an array.
let students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 76 },
    { name: "Charlie", grade: 92 },
    { name: "David", grade: 63 },
    { name: "Eve", grade: 78 }
];

//TODO Calculate Average Grade: Write a function to calculate the average grade of the class.
let resultAverage = ClassCalAverage(students);

function ClassCalAverage(classRage) {
    let sum = 0;

    for (let i = 0; i < classRage.length; i++) {
        sum += classRage[i].grade;
    }
    return sum / classRage.length;
}
console.log(`Average Grade in class: ${resultAverage}`);

//TODO Identify Students Below Average: Write a function to find and list students with grades below the class average.
BelowAverage(resultAverage);

function BelowAverage(failure) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].grade < failure) {
            console.log(students[i].name + "- Grade: " + students[i].grade);
        }
    }
}


//! Movie Collection Tracker
//? Create a program that allows you to manage a collection of movies, including adding movies, rating them, and viewing your collection.

//TODO Define a Movie Object: Each movie should be represented as an object with properties like title, genre, and rating.
let movie = {
    title: "Dune",
    genre: "Science Fiction",
    rating: 9.5
};
//TODO Store Movies in an Array: Use an array to store multiple movie objects.
let movies = [movie]

//TODO Create Functions: Create functions to add a movie, rate a movie, and view your entire collection.
function addMovies(add) {
    movies.push(add);
    console.log("Movie added");
}

function DisplayMovie() {
    listCount = 0;
    console.log("Movies List:");
    //FOR OF WAY
    for (let m of movies) {
        listCount++;
        console.log(`${listCount}. ${m.title}\n\t Genre: ${m.genre}\n\t Rating: ${m.rating} `);
    }
}

function MovieRate(movie, rate) {
    for (let m of movies) {
        if (m.title.toLowerCase() === movie.toLowerCase() || m.title.toLowerCase() === movie.toLowerCase()) {
            m.rating = rate;
            console.log(`Movie: ${m.title}\nUpdate Rating: ${m.rating}`);
            return;
        }
    }
    console.log("ERROR: Movie cannot be found");

}


//* Output Results: Use console.log to display the movie collection and ratings.
addMovies({ title: "Star War", genre: "Science Fiction", rating: 7 })
DisplayMovie();
MovieRate("Dune", 5);
DisplayMovie();




//! Library Book Tracker
//? Create a program to manage a small library, where you can check which books are available or borrowed, and filter the books by their status.


//TODO Predefine Book Objects: Each book should be an object with properties like title and status (available or borrowed), stored inside an array.
let books = [
    { title: "The Great Gatsby", status: "available" },
    { title: "1984", status: "borrowed" },
    { title: "To Kill a Mockingbird", status: "available" },
    { title: "The Catcher in the Rye", status: "borrowed" },
    { title: "Moby-Dick", status: "available" }
];
//TODO Filter Available Books: Write a function to list all available books.
AvailableBook();
function AvailableBook() {
    bookCount = 0;
    console.log("Book Available: ");
    for (let i = 0; i < books.length; i++) {
        if (books[i].status === "available") {
            bookCount++;
            console.log(`${bookCount}.` + books[i].title);
        }
    }

}

//TODO Filter Borrowed Books: Write a function to list all borrowed books
console.log();
BorrowedBook();
function BorrowedBook() {
    bookCount = 0;
    console.log("Book Borrowed: ");
    for (let i = 0; i < books.length; i++) {
        if (books[i].status === "borrowed") {
            bookCount++;
            console.log(`${bookCount}.` + books[i].title);
        }

    }
}

//PROBLEM MORE WORK

//! Recipe Organizer
//? Create a program to manage recipes, where some recipes are predefined, and the user can add or update recipes.

//TODO  Each recipe should have properties like title, ingredients (an array of strings), and instructions.
let recipes = [
    { title: "Pancakes", ingredients: ["Flour", "Eggs", "Milk"], instructions: "Mix and cook on a griddle." },
    { title: "Salad", ingredients: ["Lettuce", "Tomatoes", "Cucumbers"], instructions: "Chop and toss with dressing." }
  ];
//TODO Add a New Recipe: Allow the user to input a new recipe's title, ingredients, and instructions, then add it to the list.
function AddRecipe(newRecipe){
    recipes.push(newRecipe);
    console.log("New Recipie Added");
}
//TODO Update Recipe Instructions: Enable the user to update the instructions of an existing recipe.
function UpdateRecipe(title, info) {
    for (let r of recipes) {
        if (r.title.toLowerCase() === title.toLowerCase() || r.title.toLowerCase() === title.toLowerCase()) {
            r.instructions = info;
            console.log(`Recipe: ${r.title}\nUpdate Instruction: ${r.instructions}`);
            return;
        }
    }
    console.log("ERROR: Recipe cannot be found");

}

//* Display All Recipes: Write a function to display all recipes with their details.
function DisplayRecipe() {
    recipeCount = 0;
    console.log("Recipes List:");
    //FOR OF WAY
    for (let r of recipes) {
        recipeCount++;
        console.log(`${recipeCount}. ${r.title}\n\t Ingredients: ${r.ingredients}\n\t Instructions: ${r.instructions} `);
    }
}



AddRecipe({title: "Milkshake", ingredients: ["Ice Cream", "Milk"], instructions: "Mix them in blender then pour in a cup to drink."})
console.log();
DisplayRecipe();
console.log();
UpdateRecipe("milkshake", "Mix them in the blender and drink from it!");
console.log();
DisplayRecipe();


//! Car Dealership Inventory
//? Create a program to manage a car dealership inventory, where some cars are predefined, and the user can add or update car details.
//TODO Each car should have properties like make, model, year, and price.
let cars = [
    { make: "Toyota", model: "Camry", year: 2020, price: 24000 },
    { make: "Honda", model: "Civic", year: 2019, price: 22000 }
  ];

//TODO Add a New Car: Allow the user to input a new car's make, model, year, and price, then add it to the inventory.
function addNewCar(newCar){
    cars.push(newCar);
    console.log("New Car added in Inventory");
}
//TODO Update Car Price: Enable the user to update the price of an existing car.
function UpdateCar(model, price){
    console.log("Update Car Prices");
    for (let c of cars) {
        if (c.model.toLowerCase() === model.toLowerCase() || c.model.toLowerCase() === model.toLowerCase()) {
            c.price = price;
            console.log(`Model: ${c.model}\nUpdate price: $${c.price}`);
            return;
        }
    }
    console.log("ERROR: Model cannot be found");

};

//* Display All Cars: Write a function to display all cars in the inventory.
function CarInventory(){
    carCount = 0;
    console.log("Car Inventory List:");
    //FOR OF WAY
    for (let c of cars) {
        carCount++;
        console.log(`${carCount}. ${c.make}\n\t Model: ${c.model}\n\t Price: $${c.price} `);
    }
}
CarInventory();
console.log();
addNewCar({make: "Ford", model: "Mustang", year: 2021, price: 30000});
console.log();
UpdateCar("civic", 15000)
console.log();
CarInventory();






//! Pet Names with Details
//TODO Create a program that manages a list of pet names, where each pet has a name, type (e.g., dog, cat), and age.
let pets = [
    {name: "Zeke", type: "dog", age: 5},
    {name: "Cleo", type: "cat", age: 15}
];

//TODOEach object should contain name, type, and age.

//TODO  Add a New Pet: Allow the user to input a new pet's name, type, and age, then add it to the list.
function AddPet(newPet){
    pets.push(newPet);
    console.log("New Pet added");
}


//* Display All Pet Names: Write a function to display all pets with their details.
function ShowOffPet(){
    petCount = 0;
    console.log("Pet list: ");
    for (let p of pets){
        petCount++;
        console.log(`${petCount}. ${p.name}\n\t Type: ${p.type}\n\t Age: ${p.age} `);
    }
}

ShowOffPet();
AddPet({name: "Pumpkin", type: "cat", age: 6})
console.log();
ShowOffPet();

//FACTORY AS Manufacture!
function Factory(client){
    console.log(`${client} want 24 chocolate truffles at the home!`)
};


//^^^Email to FACTORY!!^^^

//CUSTOMER
let customer = "Nicole";
//Factory as Storefront     Nicole as client
Factory(customer);


//vvvvSHIPPING ARRIVE TO NICOLE HOME WITH CHOCOLATE vvvv

function Home(happy){
    console.log(`${happy} is happy to have a chocolate truffles!!`);
}

Home(customer);

