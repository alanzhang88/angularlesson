import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //inject router
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }
  onLoadServers(id: number){
    //assume complex calculation done and we need to navigate to other page
    this.router.navigate(['/servers',id,'edit'],{queryParams:{allowEdit:'1'},fragment:'loading'});
  }
  onLogin(){
    this.authService.login();
  }
  onLogout(){
    this.authService.logout();
  }
}
