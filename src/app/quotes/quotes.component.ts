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
      0,
      0,
      'Nelson Mandela'
    ),
    new Quote(2, 'QUOTE HERE', 0, 0, 'Author Name'),
    new Quote(3, 'QUOTE HERE', 0, 0, 'Author Name'),
    new Quote(4, 'QUOTE HERE', 0, 0, 'Author Name'),
    new Quote(5, 'QUOTE HERE', 0, 0, 'Author Name'),
  ];

  highestVote: number[] = this.userquotes.map(quoter=>quoter.upvote)
  highest = Math.max(...this.highestVote)
  constructor() {}

  ngOnInit(): void {}
}
