import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public usersList : Array<any>=[];

  constructor(private userservice : UserService) {
    this.getAllUsers();
   }

  ngOnInit(): void {
  }


  public getAllUsers()
  {
    this.userservice.getAllUsers().subscribe((users : any)=>{
      console.log(users.data);
      this.usersList = users.data;
    });
  }

}
