import { Component, OnInit } from '@angular/core';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-urlvacia',
  templateUrl: './urlvacia.component.html',
  styleUrls: ['./urlvacia.component.css']
})
export class UrlvaciaComponent implements OnInit {

  
  constructor(private token:TokenService) { }
   url = false;
  ngOnInit(): void {
    var key = localStorage.getItem('key_token');
    console.log(key)
    if(key != null ){
      this.url = true
    }else{
      this.url = false
    }
 
  }

 

}
