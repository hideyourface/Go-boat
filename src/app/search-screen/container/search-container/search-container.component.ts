import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DeviceControllerService } from 'src/app/shared/services/device-controller.service';
import { SearchServiceService } from 'src/app/shared/services/search-service.service';
import { faChevronRight, faChevronDown, faUser, faShip, faAnchor, faSearch } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.scss']
})
export class SearchContainerComponent implements OnInit {
  public isMobile = true;
  public faChevronRight = faChevronRight;
  public faChevronDown = faChevronDown;
  public faUser = faUser;
  public faShip = faShip;
  public faSearch = faSearch;
  public faAnchor = faAnchor;

  constructor(private deviceService : DeviceControllerService, private search : SearchServiceService) {
    if(!this.deviceService.deviceService.isMobile()){
      this.isMobile = false;
    }
  }

  ngOnInit(): void {
  }

  buildSearchQuery(values : NgForm, category : string){
    this.search.buildSearchQuery(values, category);
  }

}
