import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nevbar',
  templateUrl: './nevbar.component.html',
  styleUrls: ['./nevbar.component.scss']
})
export class NevbarComponent implements OnInit {

  constructor() { }

  @Output() navClick =new EventEmitter();

  ngOnInit(): void {
  }

  onClick(str: string) {
    this.navClick.emit(str);
  }

}
