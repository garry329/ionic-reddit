import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { DetailPage } from '../detail/detail'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items:any;
  category:any;
  limit:any;
  constructor(public navCtrl: NavController,private weatherProvider:WeatherProvider) {
    this.defaults();
  }

  ionViewWillEnter(){


    this.getPosts(this.category,this.limit);

  }
  defaults(){
    if(localStorage.getItem('category')!=null){
      this.category=localStorage.getItem('category')

    }
    else{
      this.category='sports'
    }

    if(localStorage.getItem('limit')!=null){
      this.limit=localStorage.getItem('limit')

    }
    else{
      this.limit=20
    }
    
  }

  getPosts(category,limit){
    this.weatherProvider.getPosts(category,limit).subscribe(weather =>{
      console.log(weather)
      this.items=weather['data']['children']
    });
  }
  viewPosts(item){
  this.navCtrl.push(DetailPage,{item:item});

  }
  changeCat(){
    this.getPosts(this.category,this.limit);
  }



  

}
