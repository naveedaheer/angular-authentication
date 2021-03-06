import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  ngOnInit() {
  }

  error: any;

  constructor(public af: AngularFire,private router: Router) {

  }
  onSubmit(formData) {
    if(formData.valid) {
      console.log("formData.value", formData.value);
      this.af.auth.createUser({
        email: formData.value.email,
        password: formData.value.password
      }).then(

        (success) => {
        console.log(success);
              this.af.database.list('users').push({
                email: formData.value.email,
                name: formData.value.name,
                uid: success.uid
      })
        this.router.navigate(['/login'])
      }).catch(
        (err) => {
        console.log(err);
        this.error = err;
      })
    }
  }

}
