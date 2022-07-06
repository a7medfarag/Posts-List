import { JwtService } from '../../core/services/jwt.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted: boolean = false;
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private jwt: JwtService, private router: Router , private toastr:ToastrService) { }

  ngOnInit(): void {
    this.buildForm()
  }

  collectInputData(data:any){
    return {
        "user" : {
          "email" : data.email,
          "password" : data.password},
          "device": {"uid":"3", "token": null}
    }
  }
  onSubmit(){
    this.submitted =true;
    if(this.loginForm.valid){
        this.jwt.login(this.collectInputData(this.loginForm.value)).subscribe((res:any)=>{
          console.log(res);
          this.toastr.success('Login Success')
        this.jwt.setToken(res.data.user.access_token);
        this.router.navigate(['/posts-list'])
      },
      err=>{
        console.log(err.respond);
        this.toastr.error('Please Follow The Log in criteria')
      }
      )
    }
  }

  get f (){
    return this.loginForm.controls;
  }
  buildForm(){
    this.loginForm = this.fb.group({
      'email': ['',[Validators.email, Validators.required]],
      'password': ['', [Validators.required, Validators.min(2)]],
    })
   
  }
}
