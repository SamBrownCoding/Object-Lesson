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
function quoter(){
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

function DisplayContact() {
    
    listCount = 0;
    console.log("Contact List:");
    //FOR OF WAY
    for (let c of contacts){
        listCount++;
        console.log(`${listCount}. ${c.fName} ${c.lName}\n\t\tMobile: ${c.phone}\n\t\tEmail: ${c.email} `);
    }
    //FOR LOOP WAY
    //for (let i = 0; i < contacts.length; i++) {
    //console.log(`${listCount}. ${contacts[i].fName} ${contacts[i].lName}\n\t\tMobile: ${contacts[i].phone}\n\t\tEmail: ${contacts[i].email} `);
}

function SearchContact(name){
    for (let c of contacts) {
        if (c.fName.toLowerCase() === name.toLowerCase() || c.lName.toLowerCase() === name.toLowerCase()){
            console.log(`Found Contact: ${c.fName} ${c.lName} - Mobile: ${c.phone} - Email: ${c.email}`);
            return;
        }
    }
    console.log("ERROR: Contact cannot be found");
}

//* Output Results: Use console.log to display the contacts and search results.

addContact({fName: "Nicole", lName: "Stabber", phone: "123-456-7890", email: "Stabber69@yahoo.com"});
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

function ClassCalAverage(classRage){
let sum = 0;

for (let i = 0; i < classRage.length; i++ ){
    sum += classRage[i].grade;
}
return sum / classRage.length;
}
console.log(`Average Grade in class: ${resultAverage}`);

//TODO Identify Students Below Average: Write a function to find and list students with grades below the class average.
 BelowAverage(resultAverage);

function BelowAverage(failure) {
    for (let i = 0; i < students.length; i++){
        if (students[i].grade < failure) {
            console.log(students[i].name + "- Grade: " + students[i].grade);
        }
    }
}
 
 
//! Movie Collection Tracker
//? Create a program that allows you to manage a collection of movies, including adding movies, rating them, and viewing your collection.
 
//TODO Define a Movie Object: Each movie should be represented as an object with properties like title, genre, and rating.
//TODO Store Movies in an Array: Use an array to store multiple movie objects.
//TODO Create Functions: Create functions to add a movie, rate a movie, and view your entire collection.
//* Output Results: Use console.log to display the movie collection and ratings.
 
 
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
//TODO Filter Borrowed Books: Write a function to list all borrowed books