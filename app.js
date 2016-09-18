//creating javascript object using object literal notation
//Nested object. Address itself is an object having city pin state
let Employee = {
    name: 'preeti',
    age: 38,
    salary: 60000,
    address:{
    	city:'Trivandrum',
    	state:"Kerala",
    	pinCode:691001
    }
};

//printing in console
console.log("name: "+Employee.name);
console.log("age: "+Employee.age);
console.log("salary: "+Employee.salary);
console.log("adress: "+Employee.address.city+", "+Employee.address.state+" "+Employee.address.pinCode);
