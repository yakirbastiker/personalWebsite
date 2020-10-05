import { Component } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap, Router, Params } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showImg: boolean = true;
  constructor(public route: ActivatedRoute, private router: Router) { }

  changePage(event){

    if(event === 'home') {
      this.showImg = true;
    }else {
      this.showImg = false;
    }
  }

}
  


  
    
  
