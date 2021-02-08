import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterBoatService } from 'src/app/shared/services/register-boat.service';
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
    //charging the steps object
    this.steps = this.registration.steps;
   }

  ngOnInit(): void {
    //check on device
    this.deviceService.deviceService.isMobile() ? this.mobile = true : this.mobile = false;

  }

  onSubmit(f : NgForm){
    this.form = f.value;
    this.registration.newBoatRegister(this.form);
    //send form information to the page via an event emitter
    this.formSubmitted.emit(true);
  }

  nextStep(f : NgForm){
    //send next step request to the page via an event emitter
    this.changeStep.emit(f.value);
  }
}
