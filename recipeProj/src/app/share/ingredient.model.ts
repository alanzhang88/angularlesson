export class Ingredient {
  public name: string;
  public amount: number;

  constructor(name:string,amount:number){
    this.name = name;
    this.amount = amount;
  }

  //a shortcut without fields and just add public keyword in the params of constructor
  //constructor(public name:string, public amount:number){}
}
