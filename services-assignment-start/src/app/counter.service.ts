export class CounterService{
  counter = 0;

  increCounter(){
    this.counter += 1;
  }

  logCounter(){
    console.log('Current counter: ', this.counter);
  }
}
