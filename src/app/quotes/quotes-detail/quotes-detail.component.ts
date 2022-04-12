// import { Quote } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quote } from 'src/app/quote';

@Component({
  selector: 'app-quotes-detail',
  templateUrl: './quotes-detail.component.html',
  styleUrls: ['./quotes-detail.component.css'],
})
export class QuotesDetailComponent implements OnInit {
  @Input() inQuote!: Quote;
  @Output() removeQuote = new EventEmitter<boolean>();
  
  quoteDelete(del:boolean){
    this.removeQuote.emit(del)
  }
  constructor() {}

  ngOnInit(): void {}
}
