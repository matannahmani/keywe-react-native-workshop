/*  Before we start i would like to note this class is not super important
  For React developers, nowdays we prefer functional components over class
  functional components allow faster development time and easier code.
  this is why i am not putting a lot of effort in this section.
*/

// Here we are creating a Person Object
// which takes first name, last name, age, gender and interests
// ES2015 edition
// First option
class Person {

    // class constructor (Object params)
    constructor(first, last, age, gender, interests) {
      this.name = {
        first,
        last
      };
      this.age = age;
      this.gender = gender;
      this.interests = interests;
    }

    // class method
    greeting = () => {
      console.log(`Hi! I'm ${this.name.first}`);
    };

    // add can drink method and exectue
    canDrink = () => { /* your code */ }

}
// create a new Person
let myPerson = /* your Code */

module.exports = {myPerson,Person}

// This is also A possiblity for class in more functional component way
function Person2(first, last, age, gender, interests) {
    this.name = {
      first,
      last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  };
Person2.prototype.greeting = () => {
    console.log(`Hi! I'm ${this.name.first}`);
};
