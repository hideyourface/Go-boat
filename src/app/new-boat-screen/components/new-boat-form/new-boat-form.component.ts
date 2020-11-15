import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterBoatService } from 'src/app/shared/services/register-boat.service';
import { HttpClient } from '@angular/common/http';
import { DeviceControllerService } from 'src/app/shared/services/device-controller.service';

@Component({
  selector: 'app-new-boat-form',
  templateUrl: './new-boat-form.component.html',
  styleUrls: ['./new-boat-form.component.scss']
})
export class NewBoatFormComponent implements OnInit {
  @Input() currentStep : object;
  public form : NgForm;
  public steps : object[];
  public mobile = true;
  @Output() changeStep : EventEmitter<string> = new EventEmitter();
  @Output() formSubmitted : EventEmitter<boolean> = new EventEmitter();

  constructor(private registration : RegisterBoatService, private deviceService : DeviceControllerService) {
    this.steps = this.registration.steps;
   }

  ngOnInit(): void {
    this.deviceService.deviceService.isMobile() ? this.mobile = true : this.mobile = false;

  }

  onSubmit(f : NgForm){
    this.form = f.value;
    console.log('this.form', this.form );
    this.registration.newBoatRegister(this.form);
    this.formSubmitted.emit(true);
  }

  nextStep(f : NgForm){
    console.log('f.value', f.value );
    this.changeStep.emit(f.value);
  }
}
