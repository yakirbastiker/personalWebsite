import { dependenciesFromGlobalMetadata } from '@angular/compiler/src/render3/r3_factory';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {

  constructor() { }
  mode:string = 'spinner';

  works = [
    {
      img:'../../../assets/img/mySalary.jpg',
      url: 'https://my-salary-797d2.firebaseapp.com/',
      title: 'My-Salary',
      description:'shifts tracking app with javascript'
    },
    {
      img:'../../../assets/img/‏‏bookLibrary.PNG',
      url: 'https://book-63895.firebaseapp.com/',
      title: 'Book Library',
      description:'home assignment project, with angular,scss'
    },
    // {
    //   img:'../../../assets/img/‏‏speedTyping.PNG',
    //   url: 'https://yakirbastiker.github.io/speedTyping/',
    //   title: 'Speed Typing',
    //   description:'speed typing game with javascript,css'
    // },
    {
      img:'../../../assets/img/‏‏connectFour.PNG',
      url: 'https://yakirbastiker.github.io/Connect4/',
      title: 'Connect Four',
      description:'connect four game with javascript'
    },
    {
      img:'../../../assets/img/‏‏shootingBirds.PNG',
      url: 'https://yakirbastiker.github.io/shootingbirds/',
      title: 'Shoting Birds',
      description:'shoting birds game with canvas,javascript'
    },
    {
      img:'../../../assets/img/‏‏thaiFood.PNG',
      url: 'http://www.thaifoodrestaurant.dx.am/',
      title: 'thai food restaurant',
      description:'thai food restaurant page with css, responsive'
    },
    {
      img:'../../../assets/img/‏‏adventure.PNG',
      url: 'https://yakirbastiker.github.io/extremeproject/',
      title: 'thai food restaurant',
      description:'Adventure company , Responsive design with scss'
    }
  ]

  ngOnInit(): void {
      setTimeout(()=>this.mode= 'grid', 4000);
  }

}
