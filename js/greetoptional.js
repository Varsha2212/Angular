"use strict";
class Person {
    constructor(_name) {
        this.name = '';
        this.name = this.name;
    }
}
class EmployeeOne extends Person {
    constructor(_empCode, name) {
        super(name);
        this.empCode = 0;
        this.displayName = () => {
            console.log("Name : " + this.name);
            console.log("Code :" + this.empCode);
        };
        this.empCode = _empCode;
    }
}
