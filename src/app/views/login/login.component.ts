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
  public dataSession =[];
  
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
    
      
   }

  ngOnInit(): void {
  }

  navigationToList() : void
  {
    this.userservice.login(this.userLogin.value.email,this.userLogin.value.password).subscribe((data:any)=>{
      console.log(data);
      

      if(data.data.session!=null)
      {
        this.dataSession = data;
        this.router.navigateByUrl('/list');
      }
      else{
        console.log("Error");
      }
    })
    
  }

}
