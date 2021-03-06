import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  errMsg='';
  signinForm = new FormGroup({
    username : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required),
    
  })
  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  signinNow(){
    this.errMsg='';
    const username = this.signinForm.value.username;
    const password = this.signinForm.value.password;

    this.auth.signIn(username,password).subscribe((data:any)=>{
      console.log(data);

      if (data.accessToken) {
        localStorage.setItem('token',data.accessToken);
        localStorage.setItem('tokenType',data.tokenType);
        
        
        
        
         // redirect to main dashboard

         this.router.navigate(['/dashboard/home/dash']);
      }
      
    },(err)=>{
      if (err.status==401 || err.status==400) {
        this.errMsg="Wrong username or password, please try again."
      }
    })

    
  }
}
