import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { Users } from '../user';
import { ValidationService } from '../validation-service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{

  dataSaved: boolean;
  userForm: FormGroup;
  allEmployees: Observable<Users[]>;
  message = null;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
 
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      FirstName: new FormControl('', Validators.required),
      LastName: new FormControl('', Validators.required),
      Email: new FormControl('',[Validators.required, ValidationService.emailValidator]),
      userMessage: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    this.dataSaved = false;
    const user = this.userForm.value;
    this.createUser(user);
  }

  createUser(user: Users) {
    if (this.userForm !== null) {
      this.userService.createUser(user).subscribe(() => {
          this.dataSaved = true;
          this.message = 'your details were saved and we will contact you soon';
          alert(this.message);
          this.userForm.reset();
        }
      );
    } else {
      this.message = 'one of the fields is wrong';
      alert(this.message);
    }
  }
}
