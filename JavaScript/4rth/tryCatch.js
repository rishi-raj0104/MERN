let person = {
    firstName : "Rishi",
    lastName : "Raj",

    // Getter
    get fullName()
    {
        return person.firstName + " " + person.lastName;
    },

    // Setter
    set fullName(value)
    {
        if(typeof value !== String)
        {
            throw new Error ("You must pass a string");
        }
        let name = value.split(" ");
        this.firstName = name[0];
        this.lastName = name[1];
    }
}

console.log(person.fullName);
person.fullName = "Rishi Verma";
console.log(person.fullName);

try{
    person.fullName = true;
}
catch(e){
    // console.log(e);
    alert(e);
}