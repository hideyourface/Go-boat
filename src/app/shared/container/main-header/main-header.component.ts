import { Component, OnInit } from '@angular/core';
import { Blocks } from '../../interfaces/blocks.Blocks';
import { Items } from '../../interfaces/items.Items';
import { DeviceControllerService} from '../../services/device-controller.service'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  public blocks: Blocks[] = [
    { title: 'main-header',
      cols: '50px auto 50px',
      rows: '50px',
      justify: 'start',
      align: 'center',}
  ];

  public items: Items[] = [
    {
      title : 'logo',
      grid_column_start: 1,
      grid_column_end: 2,
      grid_row_start: 1,
      grid_row_end: 1,
    },
    {
      title : 'mobile-menu',

      grid_column_start: 3,
      grid_column_end: 3,
      grid_row_start: 1,
      grid_row_end: 1,
    },
    {
      title : 'desktop-menu',
      grid_column_start: 3,
      grid_column_end: 3,
      grid_row_start: 1,
      grid_row_end: 1,
    }
  ];

  public faPlusSquare = faPlusCircle;

  constructor(private deviceService : DeviceControllerService) {
    if(this.deviceService.deviceService.isTablet() || this.deviceService.deviceService.isDesktop()) {
      this.adaptGrid();
    } else {
      this.items.splice(this.items.findIndex(element => element.title === 'desktop-menu'), 1);
    }
   }

  ngOnInit(): void {
  }

  adaptGrid(){
    this.blocks[this.blocks.findIndex(element => element.title === 'main-header')].cols = '50px auto 45%';
    this.items.splice(this.items.findIndex(element => element.title === 'mobile-menu'), 1);
  }

}
