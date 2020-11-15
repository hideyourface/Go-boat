import { Component, OnInit } from '@angular/core';
import { DeviceControllerService } from 'src/app/shared/services/device-controller.service';

@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.scss']
})
export class SearchContainerComponent implements OnInit {
  public isMobile = true;
  constructor(private deviceService : DeviceControllerService) {
    if(!this.deviceService.deviceService.isMobile()){
      this.isMobile = false;
    }
  }

  ngOnInit(): void {
  }

}
