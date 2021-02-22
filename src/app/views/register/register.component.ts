import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerLogin : FormGroup;
  public dataRegistrer =[];

  constructor(
    private router : Router,
    private fb : FormBuilder,
    private userservice : UserService,
  ) { 
    this.registerLogin = this.fb.group({
      first_name: ['',Validators.required],
      last_name : ['',Validators.required],
      email : ['',Validators.required],
      password : ['', Validators.required]
    });
  }

  ngOnInit(): void {


  }

  navigationToLogin() : void{
    this.userservice.create(this.registerLogin.value.first_name,this.registerLogin.value.last_name,this.registerLogin.value.email,this.registerLogin.value.password).subscribe((data:any)=>{
      console.log(data);
      
      if(data.data!=null)
      {
        this.dataRegistrer = data;
        this.router.navigateByUrl('/');
      }
      else{
        console.log("Error");
      }
    })
  }

}
