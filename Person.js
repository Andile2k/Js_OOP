const Person ={


    firstName: 'Alice',

    //Accesser property (getter)
get getName() {
    return this.firstName;
} 


set changeName(newName) {
this.firstName=newName;

}
}
console.log(Person) //This is just an object
console.log(Person.firstName) // This is called accessing data property
console.log(Person.getName) // Take the firstName and reassing to newPerson


Person newName= "Alice";
console.log(Person.firstName)
