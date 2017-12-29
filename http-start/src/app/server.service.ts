
import { Injectable } from "@angular/core";
import { Headers, Http, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Rx";

@Injectable()
export class ServerService{
  constructor(private http:Http){}

  storeServer(servers: any[]){
    //set customizable headers
    const headers = new Headers({'Content-Type': 'application/json'});
    //this built in http will create an observable, as long as we do not subscribe, it will not be sent
    // return this.http.post('https://udemy-ng-http-3dcb4.firebaseio.com/data.json',
    //   servers,
    //   {headers: headers});
    return this.http.put('https://udemy-ng-http-3dcb4.firebaseio.com/data.json',
      servers,
      {headers: headers});
  }

  getServers(){
    return this.http.get('https://udemy-ng-http-3dcb4.firebaseio.com/data.json')
      //transform the data comming back
      .map(
        (response:Response) => {
          const data = response.json();
          return data;
        }
      ).catch(
        (error: Response) => {
          console.log(error);
          return Observable.throw('Something went wrong'); //we need to create the observable by hand which throw the error
        }
      );
  }

  getAppName(){
    return this.http.get('https://udemy-ng-http-3dcb4.firebaseio.com/AppName.json').map(
      (response: Response) =>{
        return response.json();
      }
    );
  }


}
