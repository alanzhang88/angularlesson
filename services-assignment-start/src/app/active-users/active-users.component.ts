import { Component, /*EventEmitter, Input, Output*/ OnInit } from '@angular/core';

import { UsersService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{
  // @Input() users: string[];
  // @Output() userSetToInactive = new EventEmitter<number>();
  users: string[];
  constructor(private usersSerive: UsersService){

  }

  ngOnInit(){
    this.users = this.usersSerive.activeUsers;
  }

  onSetToInactive(id: number) {
    // this.userSetToInactive.emit(id);
    this.usersSerive.setToInactive(id);
  }
}
