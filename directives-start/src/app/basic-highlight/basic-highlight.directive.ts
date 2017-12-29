import { Directive, ElementRef, OnInit } from '@angular/core';

// we make it as an attribute
@Directive({
  selector: '[appBasicHighLight]'
})
export class BasicHighlightDirective implements OnInit{
  constructor(private elementRef: ElementRef){

  }

  ngOnInit(){
    //directly access is not suggestive
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}
