class Person {
    constructor (id, name) {
        this.id = id;
        this.name = name;
    }
    printName () {
        console.log(this.name);
    }
}

var person = new Person(1, "太郎");
person.printName();
