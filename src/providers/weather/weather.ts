import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class WeatherProvider {
  apiKey = '';
  url;
  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'https://www.reddit.com/r';
  }
  getPosts(category,limit){
  	return this.http.get(this.url+'/'+category+'/top.json?limit'+limit)

  }

}
