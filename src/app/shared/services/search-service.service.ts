import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {
  private query = '';

  //using behaviourSubject to render instantly the list of searched boats
  public boatsList = new BehaviorSubject<object[]>([]);

  constructor(private http : HttpClient) { }

  buildSearchQuery(values : NgForm, category : string){
    this.query = '';
    //writing the query considering all the possible search criteria in the form.
    //values can be boolean or text/number type

    for (const key in values['form']['value']) {
      // check if the field value is provided
     if(`${values['form']['value'][key]}` !== '' && `${values['form']['value'][key]}` !== 'false'){
           //adding it to the query
          this.query = this.query + `${key}` + '=' + `${values['form']['value'][key]}` + '&';
         }
    }
    this.getBoatsList(this.query);
  }

  getBoatsList(query) {
    //mock server URL
    let url = 'http://localhost:3000/boat?'  + query + '_sort=id&_order=desc';
    this.http.get(url)
    //rxjs operator to map the response
      .pipe(map(responseData => {
        //initialize the new list of boats to display
        const boatsArray = [];
        for(const key in responseData){
          if(responseData.hasOwnProperty(key)){
            //filling it
            boatsArray.push({...responseData[key], id : key});
          }
        }
        return boatsArray;
      }))
      .subscribe(boatsList => {
        //provide the new list to the behaviour subject (observable)
        this.boatsList.next(boatsList);
      });
  };

}
