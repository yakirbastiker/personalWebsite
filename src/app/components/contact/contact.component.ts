import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onCancel(){
    console.log('cancel')
  }

  onSend() {
    alert('form in maintenance.. please contact me via mail at yakirbastiker@gmail.com');
  }

}
