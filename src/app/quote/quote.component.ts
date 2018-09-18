import { Component, OnInit } from '@angular/core';
import {Quoteclax} from '../quoteclax'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  public title = 'Quotes';

  public quotes=[
     new Quoteclax(0,"General Life"," It's actully right that i don't get to understand everything at the moment, but what motivates me to wake-up to the same strugles, is to see that i get to learn from my mistakes."),
  ]
  addObjectArray(quote){
    // let quotelenght=this.quotes.length;
    // this.quotes=this.quotes.length+1;
    this.quotes.push(quote);
  }

 downvoteUpvote(index){
    this.quotes[index].count++;

 }
 Upvote(index){
    this.quotes[index].count--;
 }
 deleteQuote(index){


   let b=confirm(`Are you shure to delete this quote ${this.quotes[index].title}`)
   if(b){
     
     this.quotes.splice(index,1)
   }


   // let remove= true;
   // if(remove){
   //   let deleteQuote=confirm('Are you sure to delete this quote ${this.quotes[index].title}')
   //   if(deleteQuote:number){
   //     this.quotes.splice(deleteQuote,1)
   //   }
   //  }

 }
  constructor() { }

  ngOnInit() {
  }


}
