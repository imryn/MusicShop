import { Component, Input} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ValidationService } from '../validation-service';

@Component({
  selector: 'app-control-messages',
  template: `<div *ngIf="errorMessage !== null"> {{errorMessage}} </div>`,
  styleUrls: ['./control-messages.component.scss']
})
export class ControlMessagesComponent {
  @Input() control: FormControl;

  constructor() { }


  get errorMessage() {
    for (const propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return ValidationService.getValidatorErrorMessage(propertyName);
      }
    }

    return null;
  }
}
