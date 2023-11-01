class Person{
    name: String='';

    constructor(_name: String){
        this.name=this.name;
    }
}
class EmployeeOne extends Person{
    empCode:number=0;

    constructor(_empCode:number,name:String){
        super(name);
        this.empCode=_empCode;
    }

    displayName=():void=>{
        console.log("Name : "+this.name);
        console.log("Code :"+this.empCode);
    }
}