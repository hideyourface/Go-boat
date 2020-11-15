import { Component, OnInit } from '@angular/core';
import { Blocks } from 'src/app/shared/interfaces/blocks.Blocks';
import { Items } from 'src/app/shared/interfaces/items.Items';


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
