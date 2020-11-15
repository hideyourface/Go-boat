import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterBoatService } from 'src/app/shared/services/register-boat.service';

@Component({
  selector: 'app-new-boat-form',
  templateUrl: './new-boat-form.component.html',
  styleUrls: ['./new-boat-form.component.scss']
})
export class NewBoatFormComponent implements OnInit {
  @Input() currentStep : object;
  public form : NgForm;
  public steps : object[];
  @Output() changeStep : EventEmitter<string> = new EventEmitter();

  constructor(private registration : RegisterBoatService) {
    this.steps = this.registration.steps;
   }

  ngOnInit(): void {
  }

  onSubmit(f : NgForm){
    this.form = f.value;
    console.log('this.form', this.form );

  }

  nextStep(f : NgForm){
    console.log('f.value', f.value );
    this.changeStep.emit();
  }
}