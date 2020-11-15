import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-results-list',
  templateUrl: './search-results-list.component.html',
  styleUrls: ['./search-results-list.component.scss']
})
export class SearchResultsListComponent implements OnInit {

  public boatList = [{
    userType : 'Particulier',
    boatType : 'Catamaran',
    longeur : '15',
    largeur : '20',
    tirant : '2',
    foil : false,
    Equipage : true,
    Annexe : false
  },
  {
    userType : 'Particulier',
    boatType : 'Bateau moteur',
    longeur : '',
    largeur : '',
    tirant : '',
    foil : false,
    Equipage : false,
    Annexe : false
  },{
    userType : 'Professionel',
    boatType : 'Catamaran',
    longeur : '25',
    largeur : '10',
    tirant : '5',
    foil : false,
    Equipage : true,
    Annexe : true
  },
  {
    userType : 'Professionel',
    boatType : 'Jet-Ski',
    longeur : '',
    largeur : '',
    tirant : '',
    foil : false,
    Equipage : false,
    Annexe : false
  },
  {
    userType : 'Particulier',
    boatType : 'Voilier',
    longeur : '12',
    largeur : '5',
    tirant : '4',
    foil : true,
    Equipage : true,
    Annexe : true
  }

]
  constructor() { }

  ngOnInit(): void {
  }

}
