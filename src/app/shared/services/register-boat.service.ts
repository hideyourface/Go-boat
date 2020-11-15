import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterBoatService {
  public steps: object[] = [{
    name : 'intro',
    title: 'Louer son bateau',
    number: 0,
    button: 'Commencer',
    img : '../../assets/img/register-boat/register-0.jpg'
    },
    {
      name : 'chooseType',
      title : 'Votre bateau',
      number: 1,
      button: 'Suivant',
      img : '../../assets/img/register-boat/register-1.jpg'
    },{
      name : 'catamaran',
      title: 'Votre Catamaran',
      number: 2,
      button: 'Suivant'
    },{
      name : 'sailBoat',
      title: 'Votre Voilier',
      number: 3,
      button: 'Suivant'

    },{
      name : 'confirmation',
      title: 'Confirmation',
      number: 4,
      button: 'Submit',
    }
  ];

  public currentStep = new BehaviorSubject<object>(this.steps[0]);
  constructor(private http : HttpClient) { }

  setCurrentStep(step : number){
    if(step < this.steps.length){
    this.currentStep.next(this.steps[this.steps.findIndex(item => item['number'] === step) + 1]);
    } else {
      this.currentStep.next(this.steps[0]);
    }
  }

  newBoatRegister(form : object){
    this.http.post('http://localhost:3000/boat', form).subscribe(responseData => {
    });
  }
}
