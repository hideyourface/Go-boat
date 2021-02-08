import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchServiceService } from 'src/app/shared/services/search-service.service';
@Component({
  selector: 'app-search-results-list',
  templateUrl: './search-results-list.component.html',
  styleUrls: ['./search-results-list.component.scss']
})
export class SearchResultsListComponent implements OnInit {
  public boatList : object[] = [];
  private boatListSubscription : Subscription;

  constructor(private search : SearchServiceService) {
    this.search.getBoatsList('');

  }

  ngOnInit(): void {
    //subscription to boat list observable
    this.boatListSubscription = this.search.boatsList.subscribe(value =>{
      this.boatList = value;
    })
   }


  ngOnDestroy(){
    this.boatListSubscription.unsubscribe();
  }


}
