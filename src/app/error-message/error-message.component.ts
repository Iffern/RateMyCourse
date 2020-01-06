import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from '@angular/forms';
import {ValidatorsService} from '../validators/validators.service';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent {
  @Input() control: AbstractControl;

  get errorMessage() {
    for (const key in this.control.errors) {
      if (this.control.errors.hasOwnProperty(key) && this.control.dirty) {
        return ValidatorsService.getValidationMessage(key, this.control.errors[key]);
      }
    }

    return null;
  }

}
