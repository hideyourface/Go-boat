import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RegisterBoatService } from 'src/app/shared/services/register-boat.service';

@Component({
  selector: 'app-new-boat-side-image',
  templateUrl: './new-boat-side-image.component.html',
  styleUrls: ['./new-boat-side-image.component.scss']
})
export class NewBoatSideImageComponent implements OnInit {

  private formStep : Subscription;
  public currentStep : object = [];


constructor(private registration : RegisterBoatService) { }

  ngOnInit(): void {
    this.formStep = this.registration.currentStep.subscribe(value => this.currentStep = value);
    console.log('this.currentStep --->', this.currentStep);

  }

  ngOnDestroy(){
    this.formStep.unsubscribe();
  }
}
