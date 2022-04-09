// import { Quote } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Quote } from 'src/app/quote';

@Component({
  selector: 'app-quotes-detail',
  templateUrl: './quotes-detail.component.html',
  styleUrls: ['./quotes-detail.component.css'],
})
export class QuotesDetailComponent implements OnInit {
  @Input() inQuote!: Quote;
  constructor() {}

  ngOnInit(): void {}
}
