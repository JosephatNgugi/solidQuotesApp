import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css'],
})
export class QuotesComponent implements OnInit {
  title = 'Quotes';

  userquotes: Quote[] = [
    new Quote(
      1,
      'Courage is not the absence of fear. It is the presence of fear, yet the will to move on',
      1,
      0,
      'Nelson Mandela'
    ),
  ];

  toggleDetails(index:number){
    this.userquotes[index].showAuthor = this.userquotes[index].showAuthor;
  }
  constructor() {}

  ngOnInit(): void {}
}
