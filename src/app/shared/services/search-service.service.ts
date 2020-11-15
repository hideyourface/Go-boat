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

  public boatsList = new BehaviorSubject<object[]>([]);

  constructor(private http : HttpClient) { }

  buildSearchQuery(values : NgForm, category : string){
    this.query = '';
    let controls = values['form']['value'];
    for (const key in values['form']['value']) {
     if(`${values['form']['value'][key]}` !== '' && `${values['form']['value'][key]}` !== 'false'){


          this.query = this.query + `${key}` + '=' + `${values['form']['value'][key]}` + '&';
         }
/*       if(this.query.includes(key)){
        this.query = this.queryRefreshParam(key, this.query);
      } */
      /*  */
    }

    this.getBoatsList(this.query);
  }



  getBoatsList(query) {
    let url = 'http://localhost:3000/boat?'  + query + '_sort=id&_order=desc';
    this.http.get(url)
      .pipe(map(responseData => {
        const boatsArray = [];
        for(const key in responseData){
          if(responseData.hasOwnProperty(key)){
            boatsArray.push({...responseData[key], id : key});
          }
        }
        return boatsArray;
      }))
      .subscribe(boatsList => {
        this.boatsList.next(boatsList);
      });
  };

}
