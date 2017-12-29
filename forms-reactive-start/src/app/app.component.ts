import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUserName = ['Chris', 'Anna'];

  ngOnInit(){
    //pass in an object to configure FormGroup
    this.signupForm = new FormGroup({
      'userData': new FormGroup({ //if we do not bind this, the this in the function of forbiddenNames will not be the right class and hence generate the error of no such property
        'username': new FormControl(null,[Validators.required,this.forbiddenNames.bind(this)]),//pass in configuration such as default value and validators
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails), //the third arg can be async function / list of async funcs
      }),
      'gender': new FormControl('male'),//default select to male
      'hobbies': new FormArray([]) //an array of form controls
    });
    // this.signupForm.valueChanges.subscribe(
    //   (value)=>{
    //     console.log(value);
    // });
    // this.signupForm.statusChanges.subscribe(
    //   (value)=>{
    //     console.log(value);
    // });
    // this.signupForm.setValue({
    //   'userData': {
    //     'username': 'Max',
    //     'email': 'max@test.com'
    //   },
    //   'gender': 'male',
    //   'hobbies': []
    // });
    // this.signupForm.patchValue({
    //   'userData': {
    //     'username': 'Anna'
    //   }
    // });
    // this.signupForm.reset();
  }

  onSubmit(){
    console.log(this.signupForm);
  }

  onAddHobby(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  //custom synchronous validator
  //{[s:string]:boolean} return a key value pair with key type string and value type boolean
  forbiddenNames(control: FormControl): {[s:string]:boolean} {
    if (this.forbiddenUserName.indexOf(control.value) !== -1){
      return {'nameIsForbidden': true};//validator failed
    }
    return null; //if validation is successfully MUST return null, cannot do {'nameIsForbidden': false}
  }

  //custom async validator
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any>{
    const promise = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        if(control.value === 'test@test.com'){
          resolve({'emailIsForbidden': true});
        }
        else{
          resolve(null);
        }
      },1500);
    });
    return promise;
  }
}
