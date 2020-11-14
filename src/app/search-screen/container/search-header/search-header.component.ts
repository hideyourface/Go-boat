import { Component, OnInit } from '@angular/core';
import { Blocks } from '../../interfaces/blocks.Blocks';
import { Items } from '../../interfaces/items.Items';
import { DeviceControllerService} from '../../services/device-controller.service'

@Component({
  selector: 'app-search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.scss']
})
export class SearchHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
