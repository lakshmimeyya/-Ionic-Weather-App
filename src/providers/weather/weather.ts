import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';


@Injectable()
export class WeatherProvider {
    apiKey = '7fbd47284d202e5b';
    url;


  constructor(public http: HttpClient)
 {
    console.log('Hello WeatherProvider Provider');
    this.url = 'https://api.wunderground.com/api/'+this.apiKey+'/conditions/q';

}
  // getWeather(city, state){
  //     return this.http.get(this.Url+'/'+state+'/'+city+'.json');
  //     // .map(res => res.json());
  // }
  getWeather(city,state):Observable<HttpClient>{
    return this.http.get<HttpClient>(this.url+'/'+state+'/'+city+'.json')
  }

}
