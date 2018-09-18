import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Quoteclax} from '../quoteclax';
@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuote = new Quoteclax( 0,'','');
  @Output() addquote= new EventEmitter<Quoteclax>();
   submitQuote(){
     this.addquote.emit(this.newQuote);
   }
  constructor() { }

  ngOnInit() {
  }

}
