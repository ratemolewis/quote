import { Directive ,ElementRef,Input,HostListener} from '@angular/core';

@Directive({
  selector: '[appVotes]'
})
export class VotesDirective {

  constructor(private elem:ElementRef) { }
  @HostListener ("click") onClick(){

  }
  @HostListener ("dblclick") onDoubleClicks(){

  }

  private (action:string){
    
  }
}
