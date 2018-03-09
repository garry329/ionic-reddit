import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home'

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  category:any;
  limit:any;
  constructor(public navCtrl: NavController) {
    this.defaults();
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
  
  setDefaults(){
  localStorage.setItem('category',this.category);
  localStorage.setItem('limit',this.limit);
  this.navCtrl.push(HomePage);
  }


  

}
