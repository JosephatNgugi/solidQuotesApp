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
      'Nelson Mandela',
      'Joe Lamas'
    ),
    new Quote(
      2,
      'The absence of evidence is not the evidence of absence',
      0,
      0,
      'Dr Carl Sagan',
      'Joe Lamas'
    ),
    new Quote(
      3,
      'We cannot solve our problems with the same thinking we used when we created them.',
      0,
      0,
      'Albert Einstein',
      'Joe Lamas'
    ),
    new Quote(4, 'Every villain is a hero of his or her own story', 0, 0, 'Christopher Vogler', 'Joe Lamas'),
    new Quote(5, 'I asked God for a bike, but I know God doesn\'t work that way. So I stole a bike and asked for forgiveness', 0, 0, 'Emo Philips', 'Joe Lamas'),
  ];

  // counter(add:Quote){
  //   let increamenter = this.userquotes.length;
  //   add.upvote = increamenter++;
  //   add.downvote = increamenter++;
  //   this.userquotes.push(add)
  // }

  highestVote: number[] = this.userquotes.map((quoter) => quoter.upvote);
  highest = Math.max(...this.highestVote);
  constructor() {}

  ngOnInit(): void {}
}
