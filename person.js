class Person{
    constructor(name){
        this.name = name;
    }

    getName()
    {
        return `My name is ${this.name}`;
        
    }
}

module.exports = { 
    Person, 
};