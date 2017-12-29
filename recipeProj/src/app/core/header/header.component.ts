import { Component, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from "../../share/data-storage.service";
import { Response } from '@angular/http';
import { AuthService } from "../../auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent{

  // @Output() featureSlected = new EventEmitter<string>();
  authService: AuthService;

  constructor(private dataStorageService: DataStorageService, authService: AuthService){
    this.authService = authService;
  }

  // onSelect(feature: string){
  //     this.featureSlected.emit(feature);
  // }

  onSaveData(){
    this.dataStorageService.storeRecipes().subscribe(
      (response: Response) => {
          console.log(response);
      }
    );
  }
  onFetchData(){
    this.dataStorageService.getRecipes();
  }
  onLogout(){
    this.authService.logout();
  }
}
