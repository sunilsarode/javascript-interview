class Employee{

    name;
    id;

    constructor(name,id){
        this.name=name;
        this.id=id;
    }

    get name(){
        return this.name;
    }

    set name(val){
        this.name=val;
    }
}

let emp=new Employee("Sunil","2");

console.log(emp.id);
