import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/service/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userLogin : FormGroup;

  public usersList : Array<any>=[];
  
  constructor(
    private fb : FormBuilder,
    private userservice : UserService,
    private router : Router
    ) 
    {
      this.userLogin = this.fb.group({
        email : ['',Validators.required],
        password : ['', Validators.required]
      });
    
      this.userservice.getAllUsers().subscribe((users : any)=>{
        console.log(users);
        this.usersList = users;
      });
   }

  ngOnInit(): void {
  }

  navigationToList() : void
  {
    this.router.navigateByUrl('/list');
  }

}
