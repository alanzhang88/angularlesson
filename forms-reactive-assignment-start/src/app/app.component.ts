import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  signupForm: FormGroup;

  ngOnInit(){
    this.signupForm = new FormGroup({
      'project': new FormControl(null,[Validators.required],this.forbiddenName),
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'status': new FormControl(null)
    });
  }


  onSubmit(){
    console.log(this.signupForm.value);
  }

  forbiddenName(control: FormControl): Promise<any> | Observable<any>{
    const promise = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        if (control.value === 'Test'){
          resolve({'forbiddenName': true});
        }
        else{
          resolve(null);
        }
      },2000);
    });
    return promise;
  }
}
