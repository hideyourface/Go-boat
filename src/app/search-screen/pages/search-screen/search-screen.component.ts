import { Component, OnInit } from '@angular/core';
import { Blocks } from 'src/app/shared/interfaces/blocks.Blocks';
import { Items } from 'src/app/shared/interfaces/items.Items';
import { DeviceControllerService } from 'src/app/shared/services/device-controller.service';

@Component({
  selector: 'app-search-screen',
  templateUrl: './search-screen.component.html',
  styleUrls: ['./search-screen.component.scss']
})
export class SearchScreenComponent implements OnInit {
  public blocks: Blocks[] = [
    { title: 'search-screen',
      cols: '100%',
      rows: 'auto auto',
      justify: 'start',
      align: 'center',}
  ];

  public items: Items[] = [{
      title : 'search',
      grid_column_start: 2,
      grid_column_end: 3,
      grid_row_start: 1,
      grid_row_end: 2,
    },
    {
      title : 'results',
      grid_column_start: 3,
      grid_column_end: 4,
      grid_row_start: 2,
      grid_row_end: 3,
    }
  ];
  constructor(private deviceService : DeviceControllerService) {
    if(this.deviceService.deviceService.isDesktop() || this.deviceService.deviceService.isTablet()) {
      this.adaptGrid();
    }
   }

  ngOnInit(): void {
  }

  adaptGrid(){
    this.blocks[this.blocks.findIndex(element => element.title === 'search-screen')].cols = '20% 80%';
    this.blocks[this.blocks.findIndex(element => element.title === 'search-screen')].rows = '100%';
    this.items[this.items.findIndex(element => element.title === 'search')].grid_column_start = 1;
    this.items[this.items.findIndex(element => element.title === 'results')].grid_column_start = 2;
    this.items[this.items.findIndex(element => element.title === 'results')].grid_row_start = 2;
  }
}
