import { Component, OnInit } from '@angular/core';
import { Items } from 'src/app/shared/interfaces/items.Items';
import { Blocks } from 'src/app/shared/interfaces/blocks.Blocks';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { RegisterBoatService } from 'src/app/shared/services/register-boat.service'

@Component({
  selector: 'app-new-boat-form-container',
  templateUrl: './new-boat-form-container.component.html',
  styleUrls: ['./new-boat-form-container.component.scss']
})
export class NewBoatFormContainerComponent implements OnInit {
  public blocks: Blocks[] = [{
      title: 'new-boat-header',
      cols: '100%',
      rows: '20% 8% 64% 3%',
      justify: 'start',
      align: 'start',
    }];

  public items: Items[] = [{
      title : 'header-link',
      grid_column_start: 1,
      grid_column_end: 2,
      grid_row_start: 1,
      grid_row_end: 1,
    },
    {
      title : 'header-title',
      grid_column_start: 1,
      grid_column_end: 1,
      grid_row_start: 2,
      grid_row_end: 2,
    },
    {
      title : 'form',
      grid_column_start: 1,
      grid_column_end: 1,
      grid_row_start: 3,
      grid_row_end: 3,
    },
    {
      title : 'footer-link',
      grid_column_start: 1,
      grid_column_end: 1,
      grid_row_start: 4,
      grid_row_end: 4,
    }];

    private formStep : Subscription;
    public currentStep : object = [];
    public faChevronLeft = faChevronLeft;



  constructor(private registration : RegisterBoatService, ) { }

  ngOnInit(): void {
    this.formStep = this.registration.currentStep.subscribe(value => this.currentStep = value);
    console.log('this.currentStep --->', this.currentStep);

  }

  ngOnDestroy(){
    this.formStep.unsubscribe();
  }

  nextStep(){
    console.log('nextStep');
    if(this.currentStep['name'] !== 'confirmation'){
      this.registration.setCurrentStep(this.currentStep['number']);
      this.blocks[this.blocks.findIndex(element => element.title === 'new-boat-header')].rows =  '15% 5% 72% 3%';
    }
  }

}
