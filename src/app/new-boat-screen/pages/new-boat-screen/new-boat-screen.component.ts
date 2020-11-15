import { Component, OnInit } from '@angular/core';
import { Blocks } from 'src/app/shared/interfaces/blocks.Blocks';
import { Items } from 'src/app/shared/interfaces/items.Items';
import { DeviceControllerService } from 'src/app/shared/services/device-controller.service';

@Component({
  selector: 'app-new-boat-screen',
  templateUrl: './new-boat-screen.component.html',
  styleUrls: ['./new-boat-screen.component.scss']
})
export class NewBoatScreenComponent implements OnInit {
  public blocks: Blocks[] = [
    { title: 'new-boat',
      cols: '100%',
      rows: '100%',
      justify: 'start',
      align: 'center',}
  ];

  public items: Items[] = [{
      title : 'form',
      grid_column_start: 1,
      grid_column_end: 3,
      grid_row_start: 1,
      grid_row_end: 1,
    },
    {
      title : 'img',
      grid_column_start: 2,
      grid_column_end: 3,
      grid_row_start: 1,
      grid_row_end: 1,
    }
  ];
  constructor(private deviceService : DeviceControllerService) {
    if(this.deviceService.deviceService.isDesktop() || this.deviceService.deviceService.isTablet()) {
      this.adaptGrid();
    } else {
      this.items.splice(this.items.findIndex(element => element.title === 'img'), 1);
    }
   }

  ngOnInit(): void {
  }

  adaptGrid(){
    this.blocks[this.blocks.findIndex(element => element.title === 'new-boat')].cols = '55% 45%';
  }


}
