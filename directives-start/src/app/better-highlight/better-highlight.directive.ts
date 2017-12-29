import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elRef: ElementRef, private render: Renderer2) {

  }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
    //this.render.setStyle(this.elRef.nativeElement,'backgroundColor', 'blue');
    //renderer setStyle, 1st arg is the nativeElement, second is the css style key, third is the value
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
    //this.render.setStyle(this.elRef.nativeElement,'backgroundColor', 'blue');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    //this.render.setStyle(this.elRef.nativeElement,'backgroundColor', 'transparent');
    this.backgroundColor = this.defaultColor;
  }
}
